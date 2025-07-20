<?php

namespace BoltAudit\App\Services;

use ReflectionFunction;
use ReflectionMethod;

/**
 * Collects performance metrics for individual plugins.
 */
class PluginMetricsCollector {
	protected string $slug;

	public function run( string $slug ): array {
		$this->slug = $slug;

		return $this->collect_now();
	}

	protected function collect_now(): array {
		return [
			// 'post_types'  => $this->get_registered_post_types(),
			'scripts'     => $this->get_scripts_by_plugin(),
			'styles'      => $this->get_styles_by_plugin(),
			'hooks'       => $this->get_hooks_by_plugin(),
			// 'cron_jobs'   => $this->get_cron_jobs_by_plugin(),
			// 'query_count' => $this->get_plugin_query_count(),
		];
	}

	protected function belongs_to_plugin( string $path ): bool {
		if ( empty( $path ) ) {
			return false;
		}

		$plugin_dir = wp_normalize_path( WP_PLUGIN_DIR . '/' . $this->slug );

		return strpos( wp_normalize_path( $path ), $plugin_dir ) === 0;
	}

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
				if ( is_object( $callback[0] ) || class_exists( $callback[0] ) ) {
					$ref = new ReflectionMethod( $callback[0], $callback[1] );

					return $ref->getFileName();
				}
			} elseif ( $callback instanceof \Closure ) {
				$ref = new ReflectionFunction( $callback );

				return $ref->getFileName();
			}
		} catch ( \ReflectionException $e ) {}

		return;
	}

	public function get_hooks_by_plugin(): int {
		global $wp_filter;
		$count = 0;
		foreach ( $wp_filter as $hook ) {
			foreach ( $hook->callbacks ?? [] as $callbacks ) {
				foreach ( $callbacks as $callback ) {
					$file = $this->get_callback_file( $callback['function'] ) ?? '';
					if ( $this->belongs_to_plugin( $file ) ) {
						$count++;
					}
				}
			}
		}

		return $count;
	}

	public function get_scripts_by_plugin(): array {
		global $wp_scripts;
		$found = [];
		foreach ( $wp_scripts->registered ?? [] as $handle => $data ) {
			if ( isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
				$found[] = ['handle' => $handle, 'src' => $data->src];
			}
		}

		return $found;
	}

        public function get_styles_by_plugin(): array {
                global $wp_styles;
                $found = [];
                foreach ( $wp_styles->registered ?? [] as $handle => $data ) {
                        if ( isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
                                $found[] = ['handle' => $handle, 'src' => $data->src];
                        }
                }

                return $found;
        }

       public function get_enqueued_scripts_by_plugin(): array {
               global $wp_scripts;
               $found = [];
               foreach ( $wp_scripts->queue ?? [] as $handle ) {
                       $data = $wp_scripts->registered[$handle] ?? null;
                       if ( $data && isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
                               $found[] = ['handle' => $handle, 'src' => $data->src];
                       }
               }

               return $found;
       }

       public function get_enqueued_styles_by_plugin(): array {
               global $wp_styles;
               $found = [];
               foreach ( $wp_styles->queue ?? [] as $handle ) {
                       $data = $wp_styles->registered[$handle] ?? null;
                       if ( $data && isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
                               $found[] = ['handle' => $handle, 'src' => $data->src];
                       }
               }

               return $found;
       }

	public function get_registered_post_types(): array {
		$types = [];
		foreach ( get_post_types( ['_builtin' => false], 'objects' ) as $cpt ) {
			if ( strpos( $cpt->name, $this->slug ) !== false ||
				strpos( $cpt->rewrite['slug'] ?? '', $this->slug ) !== false ||
				strpos( $cpt->rest_base ?? '', $this->slug ) !== false ) {
				$types[] = $cpt->name;
			}
		}

		return $types;
	}

	public function get_cron_jobs_by_plugin(): array {
		$cron = _get_cron_array();
		$jobs = [];
		foreach ( $cron as $hooks ) {
			foreach ( $hooks as $hook => $events ) {
				foreach ( $events as $event ) {
					$file = $this->get_callback_file( $event['function'] ?? '' );
					if ( $file && $this->belongs_to_plugin( $file ) ) {
						$jobs[] = [
							'hook'     => $hook,
							'schedule' => $event['schedule'] ?? 'single',
						];
					}
				}
			}
		}

		return $jobs;
	}

	public function get_plugin_query_count(): int {
		global $wpdb;
		if ( ! defined( 'SAVEQUERIES' ) || ! SAVEQUERIES || empty( $wpdb->queries ) ) {
			return 0;
		}

		$count = 0;
		foreach ( $wpdb->queries as $query ) {
			foreach ( $query[2] ?? [] as $trace ) {
				if ( isset( $trace['file'] ) && $this->belongs_to_plugin( $trace['file'] ) ) {
					$count++;
					break;
				}
			}
		}

		return $count;
	}
}
