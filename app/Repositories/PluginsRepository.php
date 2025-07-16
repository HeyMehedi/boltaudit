<?php

namespace BoltAudit\App\Repositories;

use BoltAudit\App\Repositories\OptionsRepository;

class PluginsRepository {

	protected static $cached_plugins_data = null;

	public static function get_plugins_data() {
		if ( null !== self::$cached_plugins_data ) {
			return self::$cached_plugins_data;
		}

		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( ! function_exists( 'get_plugin_updates' ) ) {
			require_once ABSPATH . 'wp-admin/includes/update.php';
		}

		$all_plugins    = get_plugins();
		$plugin_updates = get_plugin_updates();
		$plugins_data   = [];
		$active_plugins = get_option( 'active_plugins', [] );

		foreach ( $all_plugins as $plugin_file => $plugin_data ) {
			$slug         = dirname( $plugin_file );
			$version      = $plugin_data['Version'] ?? 'unknown';
			$option_key   = "plugin_data_{$slug}_v{$version}";
			$cached_entry = OptionsRepository::get_option( $option_key, 'plugins_cache' );

			if ( $cached_entry && ! empty( $cached_entry['data'] ) ) {
				$plugins_data[] = json_decode( $cached_entry['data'], true );
				continue;
			}

			$wp_org_info  = self::fetch_wp_org_info( $slug );
			$is_wp_repo   = ! empty( $wp_org_info ) && ! is_wp_error( $wp_org_info );
			$last_updated = $is_wp_repo ? ( $wp_org_info->last_updated ?? null ) : null;
			$is_abandoned = $last_updated ? self::is_abandoned( $last_updated ) : null;

			$data = [
				'name'          => $plugin_data['Name'] ?? '',
				'slug'          => $slug,
				'plugin_file'   => $plugin_file,
				'needs_upgrade' => isset( $plugin_updates[$plugin_file] ),
				'is_wp_repo'    => $is_wp_repo,
				'is_active'     => in_array( $plugin_file, $active_plugins ),
				'last_updated'  => $last_updated,
				'is_abandoned'  => $is_abandoned,
				'version'       => $version,
			];

			OptionsRepository::create_option( $option_key, 'plugins_cache', $data );
			$plugins_data[] = $data;
		}

		self::$cached_plugins_data = $plugins_data;

		return $plugins_data;
	}

	protected static function is_wp_org_plugin( $plugin ) {
		foreach ( ['PluginURI', 'AuthorURI'] as $key ) {
			if ( ! empty( $plugin[$key] ) && strpos( $plugin[$key], 'wordpress.org' ) !== false ) {
				return true;
			}
		}

		return false;
	}

	protected static function fetch_wp_org_info( $slug ) {
		if ( ! function_exists( 'plugins_api' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
		}

		$info = plugins_api( 'plugin_information', ['slug' => $slug, 'fields' => ['last_updated' => true]] );
		if ( is_wp_error( $info ) ) {
			return;
		}

		return $info;
	}

	protected static function is_abandoned( $last_updated ) {
		$then = strtotime( $last_updated );
		if ( ! $then ) {
			return false;
		}

		return ( time() - $then ) > YEAR_IN_SECONDS;
	}

	public static function get_counts() {
		$data      = self::get_plugins_data();
		$total     = count( $data );
		$active    = count( get_option( 'active_plugins', [] ) );
		$inactive  = $total - $active;
		$abandoned = count( array_filter( $data, fn( $p ) => $p['is_abandoned'] ) );

		return compact( 'total', 'active', 'inactive', 'abandoned' );
	}

	public static function get_suggestions() {
		$plugins     = self::get_plugins_data();
		$counts      = self::get_counts();
		$suggestions = [];

		$abandoned_plugins = array_filter( $plugins, function ( $plugin ) {
			return true === $plugin['is_abandoned'];
		} );

		$plugins_needing_update = array_filter( $plugins, function ( $plugin ) {
			return true === $plugin['needs_upgrade'];
		} );

		$total_plugins    = $counts['total'] ?? count( $plugins );
		$active_plugins   = $counts['active'] ?? 0;
		$inactive_plugins = $total_plugins - $active_plugins;

		if ( ! empty( $plugins_needing_update ) ) {
			$suggestions[] = sprintf(
				"%d plugin(s) need updates. Keeping plugins updated improves performance and security.",
				count( $plugins_needing_update )
			);
		}

		if ( ! empty( $abandoned_plugins ) ) {
			$suggestions[] = sprintf(
				"%d plugin(s) appear abandoned (not updated in 1+ year). Consider replacing or removing them.",
				count( $abandoned_plugins )
			);
		}

		if ( $total_plugins > 30 ) {
			$suggestions[] = "You have over 30 plugins installed. Consider trimming unused ones to reduce overhead.";
		}

		if ( $inactive_plugins > 5 ) {
			$suggestions[] = sprintf(
				"You have %d inactive plugin(s). Inactive plugins still load in admin — consider removing them.",
				$inactive_plugins
			);
		}

		if ( empty( $suggestions ) ) {
			$suggestions[] = "All good! Your plugin setup looks clean and up-to-date.";
		}

		return $suggestions;
	}

	public static function get_all() {
		return [
			'plugins'     => self::get_plugins_data(),
			'counts'      => self::get_counts(),
			'suggestions' => self::get_suggestions(),
		];
	}

	public static function get_paginated( int $page = 1, int $per_page = 10 ) {
		$data = self::get_plugins_data_page( $page, $per_page );

		return [
			'plugins'       => $data['plugins'],
			'total_plugins' => $data['total_plugins'],
			'counts'        => self::get_counts_cached(),
		];
	}

	protected static function get_plugins_data_page( int $page, int $per_page ) {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( ! function_exists( 'get_plugin_updates' ) ) {
			require_once ABSPATH . 'wp-admin/includes/update.php';
		}

		$all_plugins    = get_plugins();
		$plugin_updates = get_plugin_updates();
		$active_plugins = get_option( 'active_plugins', [] );

		$offset  = ( $page - 1 ) * $per_page;
		$slice   = array_slice( $all_plugins, $offset, $per_page, true );
		$plugins = [];

		foreach ( $slice as $plugin_file => $plugin_data ) {
			$slug         = dirname( $plugin_file );
			$version      = $plugin_data['Version'] ?? 'unknown';
			$option_key   = "plugin_data_{$slug}_v{$version}";
			$cached_entry = OptionsRepository::get_option( $option_key, 'plugins_cache' );

			if ( $cached_entry && ! empty( $cached_entry['data'] ) ) {
				$plugins[] = json_decode( $cached_entry['data'], true );
				continue;
			}

			$wp_org_info  = self::fetch_wp_org_info( $slug );
			$is_wp_repo   = ! empty( $wp_org_info ) && ! is_wp_error( $wp_org_info );
			$last_updated = $is_wp_repo ? ( $wp_org_info->last_updated ?? null ) : null;
			$is_abandoned = $last_updated ? self::is_abandoned( $last_updated ) : null;

			$data = [
				'name'          => $plugin_data['Name'] ?? '',
				'slug'          => $slug,
				'plugin_file'   => $plugin_file,
				'needs_upgrade' => isset( $plugin_updates[$plugin_file] ),
				'is_wp_repo'    => $is_wp_repo,
				'is_active'     => in_array( $plugin_file, $active_plugins ),
				'last_updated'  => $last_updated,
				'is_abandoned'  => $is_abandoned,
				'version'       => $version,
			];

			OptionsRepository::create_option( $option_key, 'plugins_cache', $data );
			$plugins[] = $data;
		}

		return [
			'plugins'       => $plugins,
			'total_plugins' => count( $all_plugins ),
		];
	}

	protected static function get_counts_cached() {
		if ( ! function_exists( 'get_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		$total          = count( get_plugins() );
		$active_plugins = get_option( 'active_plugins', [] );
		$active         = count( $active_plugins );
		$inactive       = $total - $active;

		$cached    = OptionsRepository::get_all_options( 'plugins_cache' );
		$abandoned = 0;
		foreach ( $cached as $entry ) {
			$data = json_decode( is_array( $entry ) ? $entry['data'] : $entry->data, true );
			if ( isset( $data['is_abandoned'] ) && $data['is_abandoned'] ) {
				$abandoned++;
			}
		}

		return compact( 'total', 'active', 'inactive', 'abandoned' );
	}
}
