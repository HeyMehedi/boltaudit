<?php

namespace BoltAudit\App\Services;

use ReflectionFunction;
use ReflectionMethod;
use WP_Scripts;
use WP_Styles;

/**
 * Collects performance metrics for individual plugins.
 */
class PluginMetricsCollector {
	/**
	 * Collect metrics for a given plugin slug.
	 *
	 * @param string $slug Plugin slug (directory name).
	 * @return array<string,mixed>
	 */
	public function collect( string $slug ): array {
		return [
			'post_types'  => $this->get_registered_post_types( $slug ),
			'scripts'     => $this->get_scripts_by_plugin( $slug ),
			'styles'      => $this->get_styles_by_plugin( $slug ),
			'hooks'       => $this->get_hooks_by_plugin( $slug ),
			'cron_jobs'   => $this->get_cron_jobs_by_plugin( $slug ),
			'query_count' => $this->get_plugin_query_count( $slug ),
		];
	}

	/**
	 * Determine if a path belongs to the plugin.
	 */
	protected function belongs_to_plugin( string $path, string $slug ): bool {
		if ( empty( $path ) ) {
			return false;
		}

		$plugin_dir = trailingslashit( WP_PLUGIN_DIR ) . $slug . '/';

		return strpos( wp_normalize_path( $path ), wp_normalize_path( $plugin_dir ) ) === 0;
	}

	/**
	 * Get the file path for a callback if possible.
	 *
	 * @param mixed $callback Callable callback.
	 */
	protected function get_callback_file( $callback ) {
		try {
			if ( is_string( $callback ) ) {
				if ( strpos( $callback, '::' ) !== false ) {
					list( $class, $method ) = explode( '::', $callback );
					if ( class_exists( $class ) ) {
						$ref = new ReflectionMethod( $class, $method );

						return $ref->getFileName();
					}
				} elseif ( function_exists( $callback ) ) {
					$ref = new ReflectionFunction( $callback );

					return $ref->getFileName();
				}
			} elseif ( is_array( $callback ) ) {
				if ( is_object( $callback[0] ) ) {
					$ref = new ReflectionMethod( $callback[0], $callback[1] );

					return $ref->getFileName();
				} elseif ( class_exists( $callback[0] ) ) {
					$ref = new ReflectionMethod( $callback[0], $callback[1] );

					return $ref->getFileName();
				}
			} elseif ( $callback instanceof \Closure ) {
				$ref = new ReflectionFunction( $callback );

				return $ref->getFileName();
			}
		} catch ( \ReflectionException $e ) {
			return;
		}

		return;
	}

	/**
	 * Count hooks added by plugin.
	 */
	public function get_hooks_by_plugin( string $slug ): int {
		global $wp_filter;

		$count = 0;
		foreach ( (array) $wp_filter as $hook ) {
			if ( empty( $hook->callbacks ) ) {
				continue;
			}
			foreach ( $hook->callbacks as $callbacks ) {
				foreach ( $callbacks as $callback ) {
					$file = $this->get_callback_file( $callback['function'] );
					if ( $this->belongs_to_plugin( $file, $slug ) ) {
						$count++;
					}
				}
			}
		}

		return $count;
	}

	/**
	 * Get registered scripts by plugin.
	 */
	public function get_scripts_by_plugin( string $slug ): array {
		global $wp_scripts;

		if ( ! $wp_scripts instanceof WP_Scripts ) {
			return [];
		}

		$scripts = [];
		foreach ( $wp_scripts->registered as $handle => $data ) {
			$src = $data->src;
			if ( strpos( $src, "/{$slug}/" ) !== false ) {
				$scripts[] = [
					'handle' => $handle,
					'src'    => $src,
				];
			}
		}

		return $scripts;
	}

	/**
	 * Get registered styles by plugin.
	 */
	public function get_styles_by_plugin( string $slug ): array {
		global $wp_styles;

		if ( ! $wp_styles instanceof WP_Styles ) {
			return [];
		}

		$styles = [];
		foreach ( $wp_styles->registered as $handle => $data ) {
			$src = $data->src;
			if ( strpos( $src, "/{$slug}/" ) !== false ) {
				$styles[] = [
					'handle' => $handle,
					'src'    => $src,
				];
			}
		}

		return $styles;
	}

	/**
	 * Get custom post types registered by plugin.
	 */
	public function get_registered_post_types( string $slug ): array {
		$types = [];
		foreach ( get_post_types( ['_builtin' => false], 'objects' ) as $cpt ) {
			$match = false;
			if ( false !== strpos( $cpt->name, $slug ) ) {
				$match = true;
			} elseif ( ! empty( $cpt->rewrite['slug'] ) && false !== strpos( $cpt->rewrite['slug'], $slug ) ) {
				$match = true;
			} elseif ( ! empty( $cpt->rest_base ) && false !== strpos( $cpt->rest_base, $slug ) ) {
				$match = true;
			}

			if ( $match ) {
				$types[] = $cpt->name;
			}
		}

		return $types;
	}

	/**
	 * Get cron jobs scheduled by plugin.
	 */
	public function get_cron_jobs_by_plugin( string $slug ): array {
		$cron = _get_cron_array();
		if ( empty( $cron ) ) {
			return [];
		}

		$jobs = [];
		foreach ( $cron as $timestamp => $hooks ) {
			foreach ( $hooks as $hook => $events ) {
				foreach ( $events as $event ) {
					$file = $this->get_callback_file( $event['function'] );
					if ( $this->belongs_to_plugin( $file, $slug ) ) {
						$jobs[] = [
							'hook'     => $hook,
							'schedule' => $event['schedule'] ?? 'single',
						];
						break;
					}
				}
			}
		}

		return $jobs;
	}

	/**
	 * Count queries executed by the plugin. Requires SAVEQUERIES.
	 */
	public function get_plugin_query_count( string $slug ): int {
		global $wpdb;

		if ( ! defined( 'SAVEQUERIES' ) || ! SAVEQUERIES || empty( $wpdb->queries ) ) {
			return 0;
		}

		$count = 0;
		foreach ( $wpdb->queries as $query ) {
			$trace = $query[2] ?? [];
			foreach ( $trace as $step ) {
				if ( ! empty( $step['file'] ) && $this->belongs_to_plugin( $step['file'], $slug ) ) {
					$count++;
					break;
				}
			}
		}

		return $count;
	}
}