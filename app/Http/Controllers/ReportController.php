<?php

namespace BoltAudit\App\Http\Controllers;

use BoltAudit\App\Repositories\EnvironmentRepository;
use BoltAudit\App\Repositories\PostsRepository;
use BoltAudit\WpMVC\RequestValidator\Validator;
use BoltAudit\WpMVC\Routing\Response;
use Exception;
use WP_REST_Request;

class ReportController extends Controller {

	public function environment( Validator $validator, WP_REST_Request $wp_rest_request ) {
		$validator->validate(
			[
				'type' => 'string|accepted:+,-',
			]
		);

		try {
			return Response::send(
				EnvironmentRepository::get_all(),
			);
		} catch ( Exception $e ) {
			return Response::send(
				[
					'messages' => esc_html__( 'Could\'t found the enviroments', 'formgent' ),
				], 422
			);
		}
	}

	public function posts( Validator $validator, WP_REST_Request $wp_rest_request ) {
		$validator->validate(
			[
				'type' => 'string|accepted:+,-',
			]
		);

		try {
			return Response::send(
				PostsRepository::get_all(),
			);
		} catch ( Exception $e ) {
			return Response::send(
				[
					'messages' => esc_html__( 'Could\'t found the posts', 'formgent' ),
				], 422
			);
		}
	}
}
