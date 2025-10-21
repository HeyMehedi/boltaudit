<?php

namespace BoltAudit\App\Services;

defined('ABSPATH') || exit;

class PostTypeTracker
{
    protected static array $map = [];

    public static function init(): void
    {
        $stored = get_option('boltaudit_post_type_files', []);
        if (is_array($stored) ) {
            self::$map = $stored;
        }

        add_action('registered_post_type', [self::class, 'capture'], 10, 2);
    }

    public static function capture( string $slug, $args ): void
    {
        if (isset(self::$map[ $slug ]) ) {
            return;
        }

        $backtrace = debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS);
        $file      = '';
        foreach ( $backtrace as $frame ) {
            if (isset($frame['file']) ) {
                $file = $frame['file'];
                if (strpos($file, WP_PLUGIN_DIR) === 0 ) {
                    break;
                }
            }
        }

        if ($file ) {
            self::$map[ $slug ] = $file;
            update_option('boltaudit_post_type_files', self::$map);
        }
    }

    public static function get_map(): array
    {
        if (empty(self::$map) ) {
            $stored = get_option('boltaudit_post_type_files', []);
            if (is_array($stored) ) {
                self::$map = $stored;
            }
        }

        return self::$map;
    }
}
