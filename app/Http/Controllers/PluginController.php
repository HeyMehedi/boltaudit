<?php

namespace BoltAudit\App\Http\Controllers;

use BoltAudit\App\Repositories\SinglePluginRepository;
use BoltAudit\WpMVC\RequestValidator\Validator;
use BoltAudit\WpMVC\Routing\Response;
use Exception;
use WP_REST_Request;

class PluginController extends Controller {

	public function index( Validator $validator, WP_REST_Request $wp_rest_request ) {
		$validator->validate(
			[
				'slug' => 'string|required',
			]
		);

		$slug = trim( (string) $wp_rest_request->get_param( 'slug' ) );

		try {
			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			$all_plugins = get_plugins();

			$plugin_file = null;
			$plugin_data = null;

			foreach ( $all_plugins as $file => $data ) {
				if ( dirname( $file ) === $slug ) {
					$plugin_file = $file;
					$plugin_data = $data;
					break;
				}
			}

			if ( ! $plugin_file || ! $plugin_data ) {
				return Response::send(
					[
						'message' => "Plugin with slug '{$slug}' not found.",
					],
					404
				);
			}

			$response = SinglePluginRepository::get_plugin_page_data( $plugin_file, '1.0' );

			return Response::send( $response );

		} catch ( Exception $e ) {
			return Response::send(
				[
					'message' => $e->getMessage(),
				],
				500
			);
		}
	}
}
