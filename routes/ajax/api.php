<?php

use BoltAudit\App\Http\Controllers\UserController;
use BoltAudit\WpMVC\Routing\Ajax;

Ajax::get( 'user/{id}', [UserController::class, 'index'], ['admin'] );
