<?php

namespace BoltAudit\App\Console;

use BoltAudit\App\Repositories\SinglePluginRepository;
use WP_CLI;

/**
 * WP-CLI command to regenerate plugin metrics.
 */
class PluginMetricsCommand {
    /**
     * Execute the command.
     */
    public function __invoke() {
        if ( ! function_exists( 'get_plugins' ) ) {
            require_once ABSPATH . 'wp-admin/includes/plugin.php';
        }

        $all_plugins = get_plugins();
        foreach ( $all_plugins as $plugin_file => $plugin_data ) {
            $slug    = dirname( $plugin_file );
            $version = $plugin_data['Version'] ?? 'unknown';
            SinglePluginRepository::get_plugin_metrics( $slug, $version );
            WP_CLI::log( "Regenerated metrics for {$slug}" );
        }
        WP_CLI::success( 'All plugin metrics regenerated.' );
    }
}
