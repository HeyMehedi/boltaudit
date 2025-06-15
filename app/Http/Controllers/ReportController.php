<?php

namespace BoltAudit\App\Http\Controllers;

use BoltAudit\App\Repositories\EnvironmentRepository;
use BoltAudit\App\Repositories\PostsRepository;
use BoltAudit\WpMVC\RequestValidator\Validator;
use BoltAudit\WpMVC\Routing\Response;
use Exception;
use WP_REST_Request;

class ReportController extends Controller {

	private array $types = [
		'environment',
		'posts',
	];

	public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
		$validator->validate(
			[
				'type' => 'string|required',
			]
		);

		$type = $wp_rest_request->get_param( 'type' );

		if ( ! in_array( $type, $this->types ) ) {
			return Response::send(
				[
					'messages' => esc_html__( 'Invalid type', 'boltaudit' ),
				], 422
			);
		}

		try {

			switch ( $type ) {
				case 'environment':
					$response = EnvironmentRepository::get_all();
					break;
				case 'posts':
					$response = PostsRepository::get_all();
					break;
			}

			return Response::send( $response );

		} catch ( Exception $e ) {
			return Response::send(
				[
					'messages' => $e->getMessage(),
				], 422
			);
		}
	}
}
