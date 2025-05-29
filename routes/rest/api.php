<?php

use BoltAudit\App\Http\Controllers\UserController;
use BoltAudit\WpMVC\Routing\Route;

Route::get( 'user', [UserController::class, 'index'], ['admin'] );