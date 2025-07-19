<?php

namespace BoltAudit\App\Repositories;

use BoltAudit\App\Services\PluginMetricsCollector;
use BoltAudit\App\Repositories\OptionsRepository;

/**
 * Repository for retrieving single plugin performance metrics.
 */
class SinglePluginRepository {
    /**
     * Cached collector instance.
     */
    protected static ?PluginMetricsCollector $collector = null;

    /**
     * Retrieve metrics for a plugin and cache them in the options table.
     *
     * @param string $slug    Plugin slug.
     * @param string $version Plugin version.
     * @return array<string,mixed>
     */
    public static function get_plugin_metrics( string $slug, string $version ): array {
        $key    = "plugin_data_{$slug}_v{$version}";
        $cached = OptionsRepository::get_option( $key, 'plugins_cache' );

        if ( $cached && ! empty( $cached['data'] ) ) {
            return json_decode( $cached['data'], true );
        }

        $collector = self::get_collector();
        $metrics   = $collector->collect( $slug );

        OptionsRepository::create_option( $key, 'plugins_cache', $metrics );

        return $metrics;
    }

    /**
     * Get or create metrics collector instance.
     */
    protected static function get_collector(): PluginMetricsCollector {
        if ( ! self::$collector ) {
            self::$collector = new PluginMetricsCollector();
        }

        return self::$collector;
    }
}
