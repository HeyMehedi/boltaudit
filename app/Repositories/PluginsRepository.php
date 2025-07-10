<?php

namespace BoltAudit\App\Repositories;

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
			$slug        = dirname( $plugin_file );
			$wp_org_info = self::fetch_wp_org_info( $slug );

			$is_wp_repo   = ! empty( $wp_org_info ) && ! is_wp_error( $wp_org_info );
			$last_updated = $is_wp_repo ? ( $wp_org_info->last_updated ?? null ) : null;
			$is_abandoned = $last_updated ? self::is_abandoned( $last_updated ) : null;

			$plugins_data[] = [
				'name'          => $plugin_data['Name'] ?? '',
				'slug'          => $slug,
				'plugin_file'   => $plugin_file,
				'needs_upgrade' => isset( $plugin_updates[$plugin_file] ),
				'is_wp_repo'    => $is_wp_repo,
				'is_active'     => in_array( $plugin_file, $active_plugins ),
				'last_updated'  => $last_updated,
				'is_abandoned'  => $is_abandoned,
			];
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

		return ( time() - $then ) > YEAR_IN_SECONDS; // Consider abandoned if not updated in 1 year
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

		// Suggest update
		if ( ! empty( $plugins_needing_update ) ) {
			$suggestions[] = sprintf(
				"%d plugin(s) need updates. Keeping plugins updated improves performance and security.",
				count( $plugins_needing_update )
			);
		}

		// Suggest removing abandoned plugins
		if ( ! empty( $abandoned_plugins ) ) {
			$suggestions[] = sprintf(
				"%d plugin(s) appear abandoned (not updated in 1+ year). Consider replacing or removing them.",
				count( $abandoned_plugins )
			);
		}

		// Suggest reducing plugin count
		if ( $total_plugins > 30 ) {
			$suggestions[] = "You have over 30 plugins installed. Consider trimming unused ones to reduce overhead.";
		}

		// Suggest reviewing inactive plugins
		if ( $inactive_plugins > 5 ) {
			$suggestions[] = sprintf(
				"You have %d inactive plugin(s). Inactive plugins still load in admin — consider removing them.",
				$inactive_plugins
			);
		}

		// If no issues found
		if ( empty( $suggestions ) ) {
			$suggestions[] = "All good! Your plugin setup looks clean and up-to-date. ✅";
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
}
