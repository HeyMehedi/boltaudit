<?php

use BoltAudit\App\Http\Controllers\ReportController;
use BoltAudit\WpMVC\Routing\Route;

Route::group(
	'reports',
	function () {
		Route::post( '{type}', [ReportController::class, 'index'] );

		Route::post( 'plugin/{slug}', [ReportController::class, 'plugin'] );
		Route::post( 'page/{id}', [ReportController::class, 'page'] );
	},
	//['admin']
);