<?php

defined( 'ABSPATH' ) || exit;

use BoltAudit\WpMVC\App;

/**
 * Plugin Name:       BoltAudit
 * Description:       This plugin is build with WpMVC framework
 * Version:           1.0.0
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Tested up to:      6.2
 * Author:            WpMVC
 * Author URI:        http://github.com/wpmvc
 * License:           GPL v3 or later
 * License URI:       http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       boltaudit
 * Domain Path:       /languages
 */

require_once __DIR__ . '/vendor/vendor-src/autoload.php';
require_once __DIR__ . '/app/Helpers/helper.php';

final class BoltAudit
{
    public static BoltAudit $instance;

    public static function instance(): BoltAudit {
        if ( empty( self::$instance ) ) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function load() {
        $application = App::instance();

        $application->boot( __FILE__, __DIR__ );

        /**
         * Fires once activated plugins have loaded.
         *
         */
        add_action(
            'plugins_loaded', function () use ( $application ): void {

                do_action( 'before_load_boltaudit' );

                $application->load();

                do_action( 'after_load_boltaudit' );
            }
        );
    }
}

BoltAudit::instance()->load();
