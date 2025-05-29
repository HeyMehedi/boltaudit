<?php

use BoltAudit\App\Http\Controllers\ReportController;
use BoltAudit\WpMVC\Routing\Route;

Route::group(
	'reports',
	function () {
		Route::post( 'environment', [ReportController::class, 'environment'] );
		Route::post( 'statatics', [ReportController::class, 'statatics'] );
		Route::post( 'plugins', [ReportController::class, 'plugins'] );
		Route::post( 'theme', [ReportController::class, 'theme'] );
		Route::post( 'posts', [ReportController::class, 'posts'] );
		Route::post( 'pages', [ReportController::class, 'pages'] );

		Route::post( 'woocommerce', [ReportController::class, 'pages'] );

		Route::post( 'plugin/{slug}', [ReportController::class, 'plugin'] );
		Route::post( 'page/{id}', [ReportController::class, 'page'] );
	},
	//['admin']
);