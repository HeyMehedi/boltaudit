<?php

use BoltAudit\App\Http\Controllers\ReportController;
use BoltAudit\WpMVC\Routing\Route;

Route::post( 'reports/{type}', [ReportController::class, 'index'], ['admin'] ); // ex: Pages, Plugins, Environment