<?php

defined( 'ABSPATH' ) || exit;


use BoltAudit\App\Http\Controllers\PluginController;
use BoltAudit\App\Http\Controllers\ReportController;
use BoltAudit\WpMVC\Routing\Route;

Route::post('reports/{type}', array( ReportController::class, 'index' ));
Route::post('plugin/{slug}', array( PluginController::class, 'index' ));
