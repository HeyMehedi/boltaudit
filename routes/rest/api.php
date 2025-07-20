<?php

use BoltAudit\App\Http\Controllers\PluginController;
use BoltAudit\App\Http\Controllers\ReportController;
use BoltAudit\WpMVC\Routing\Route;

Route::post( 'reports/{type}', [ReportController::class, 'index'] );
Route::post( 'plugin/{slug}', [PluginController::class, 'index'] );