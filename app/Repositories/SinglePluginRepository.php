<?php

namespace BoltAudit\App\Repositories;

use BoltAudit\App\Repositories\OptionsRepository;
use BoltAudit\App\Services\PluginMetricsCollector;

defined( 'ABSPATH' ) || exit;

/**
 * Repository for retrieving single plugin performance metrics.
 */
class SinglePluginRepository {
       /**
        * Cached collector instance.
        *
        * @var PluginMetricsCollector|null
        */
    protected static ?PluginMetricsCollector $collector = null;

    protected static $active_plugins = [];

    protected static $plugin_updates = [];

       /**
        * Load WordPress plugin utility functions and cache plugin state.
        */
    protected static function ensure_wp_functions(): void {
        if ( ! function_exists( 'get_plugins' ) ) {
               require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        if ( ! function_exists( 'get_plugin_updates' ) ) {
                  require_once ABSPATH . 'wp-admin/includes/update.php';
        }

            self::$plugin_updates = get_plugin_updates();
            self::$active_plugins = get_option( 'active_plugins', [] );
    }

    public static function get_plugin_data( $plugin_file, $plugin_data ) {

            // Ensure WordPress plugin helpers are loaded only once.
            self::ensure_wp_functions();

        $slug         = dirname( $plugin_file );
        $version      = $plugin_data['Version'] ?? 'unknown';
        $option_key   = "plugin_data_{$slug}_v{$version}";
        $cached_entry = OptionsRepository::get_option( $option_key, 'plugins_cache' );

        if ( $cached_entry && ! empty( $cached_entry['data'] ) ) {
            return json_decode( $cached_entry['data'], true );
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
            'is_active'     => in_array( $plugin_file, self::$active_plugins ),
            'last_updated'  => $last_updated,
            'is_abandoned'  => $is_abandoned,
            'version'       => $version,
        ];

        OptionsRepository::create_option( $option_key, 'plugins_cache', $data );

        return $data;
    }

    /**
     * Retrieve metrics for a plugin and cache them in the options table.
     *
     * @param string $slug    Plugin slug.
     * @param string $version Plugin version.
     * @return array<string,mixed>
     */
    public static function get_plugin_page_data( string $slug, string $version ): array {
        $key    = "plugin_data_{$slug}_v{$version}";
        $cached = OptionsRepository::get_option( $key, 'plugins_cache' );

        if ( $cached && ! empty( $cached['data']['hooks'] ) ) {
            return json_decode( $cached['data'], true );
        }

        $collector = self::get_collector();
        $data      = $collector->collect( $slug );
        if ( is_array( $cached ) ) {
            $data = array_merge( $cached, $data );
        }

        OptionsRepository::create_option( $key, 'plugins_cache', $data );

        return $data;
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

    /**
     * Get or create data collector instance.
     */
    protected static function get_collector(): PluginMetricsCollector {
            // Lazily instantiate the collector when first needed.
        if ( null === self::$collector ) {
               self::$collector = new PluginMetricsCollector();
        }

            return self::$collector;
    }
}
