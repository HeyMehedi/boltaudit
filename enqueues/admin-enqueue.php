<?php

use BoltAudit\WpMVC\Enqueue\Enqueue;

defined( 'ABSPATH' ) || exit;

Enqueue::script( 'boltaudit-app-script', 'build/js/app' );
Enqueue::style( 'boltaudit-app-style', 'build/css/app' );
