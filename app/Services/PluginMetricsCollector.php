<?php

namespace BoltAudit\App\Services;

use ReflectionFunction;
use ReflectionMethod;
use BoltAudit\App\Services\PostTypeTracker;

/**
 * Collects performance metrics for individual plugins.
 */

class PluginMetricsCollector
{
    protected string $slug;

    public function run( string $slug ): array
    {
        $this->slug = $slug;

        return $this->collect_now();
    }

    protected function collect_now(): array
    {
        return [
        'post_types'  => $this->get_registered_post_types(),
        'scripts'     => $this->get_scripts_by_plugin(),
        'styles'      => $this->get_styles_by_plugin(),
        'hooks'       => $this->get_hooks_by_plugin(),
        'cron_jobs'   => $this->get_cron_jobs_by_plugin(),
        'query_count' => $this->get_plugin_query_count(),
        ];
    }

    protected function belongs_to_plugin( string $path ): bool
    {
        if (empty($path) ) {
            return false;
        }

        $plugin_dir = wp_normalize_path(WP_PLUGIN_DIR . '/' . $this->slug);

        return strpos(wp_normalize_path($path), $plugin_dir) === 0;
    }

    protected function get_callback_file( $callback )
    {
        try {
            if (is_string($callback) ) {
                if (strpos($callback, '::') !== false ) {
                    list( $class, $method ) = explode('::', $callback);
                    if (class_exists($class) ) {
                        $ref = new ReflectionMethod($class, $method);

                        return $ref->getFileName();
                    }
                } elseif (function_exists($callback) ) {
                    $ref = new ReflectionFunction($callback);

                    return $ref->getFileName();
                }
            } elseif (is_array($callback) ) {
                if (is_object($callback[0]) || class_exists($callback[0]) ) {
                    $ref = new ReflectionMethod($callback[0], $callback[1]);

                    return $ref->getFileName();
                }
            } elseif ($callback instanceof \Closure ) {
                $ref = new ReflectionFunction($callback);

                return $ref->getFileName();
            }
        } catch ( \ReflectionException $e ) {
        }

        return;
    }

    public function get_hooks_by_plugin(): int
    {
        global $wp_filter;
        $count = 0;
        foreach ( $wp_filter as $hook ) {
            foreach ( $hook->callbacks ?? [] as $callbacks ) {
                foreach ( $callbacks as $callback ) {
                    $file = $this->get_callback_file($callback['function']) ?? '';
                    if ($this->belongs_to_plugin($file) ) {
                        $count++;
                    }
                }
            }
        }

        return $count;
    }

    public function get_scripts_by_plugin(): array
    {
        global $wp_scripts;
        $found = [];
        foreach ( $wp_scripts->registered ?? [] as $handle => $data ) {
            if (isset($data->src) && strpos(wp_normalize_path($data->src), "/{$this->slug}/") !== false ) {
                $found[] = ['handle' => $handle, 'src' => $data->src];
            }
        }

        return $found;
    }

    public function get_styles_by_plugin(): array
    {
        global $wp_styles;
        $found = [];
        foreach ( $wp_styles->registered ?? [] as $handle => $data ) {
            if (isset($data->src) && strpos(wp_normalize_path($data->src), "/{$this->slug}/") !== false ) {
                $found[] = ['handle' => $handle, 'src' => $data->src];
            }
        }

        return $found;
    }

    public function get_registered_post_types(): array
    {
            $types = [];
            $map   = PostTypeTracker::get_map();

        if (! empty($map) ) {
            foreach ( $map as $slug => $file ) {
                if (strpos(wp_normalize_path($file), "/{$this->slug}/") !== false ) {
                      $types[] = $slug;
                }
            }

               return $types;
        }

        foreach ( get_post_types(['_builtin' => false], 'objects') as $cpt ) {
            if (strpos($cpt->name, $this->slug) !== false 
                || strpos($cpt->rewrite['slug'] ?? '', $this->slug) !== false 
                || strpos($cpt->rest_base ?? '', $this->slug) !== false 
            ) {
                $types[] = $cpt->name;
            }
        }

            return $types;
    }

    public function get_cron_jobs_by_plugin(): array
    {
        $cron = _get_cron_array();
        $jobs = [];
        foreach ( $cron as $hooks ) {
            foreach ( $hooks as $hook => $events ) {
                foreach ( $events as $event ) {
                    $file = $this->get_callback_file($event['function'] ?? '');
                    if ($file && $this->belongs_to_plugin($file) ) {
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

    public function get_plugin_query_count(): int
    {
        global $wpdb;
        if (! defined('SAVEQUERIES') || ! SAVEQUERIES || empty($wpdb->queries) ) {
            return 0;
        }

        $count = 0;
        foreach ( $wpdb->queries as $query ) {
            foreach ( $query[2] ?? [] as $trace ) {
                if (isset($trace['file']) && $this->belongs_to_plugin($trace['file']) ) {
                    $count++;
                    break;
                }
            }
        }

        return $count;
    }
}
=======
class PluginMetricsCollector {
	protected string $slug;

	public function run( string $slug ): array {
		$this->slug = $slug;

		return $this->collect_now();
	}

	protected function collect_now(): array {
		$scripts = $this->merge_registered_and_enqueued(
			$this->get_scripts_by_plugin() ?? [],
			$this->get_enqueued_scripts_by_plugin() ?? []
		);

		$styles = $this->merge_registered_and_enqueued(
			$this->get_styles_by_plugin() ?? [],
			$this->get_enqueued_styles_by_plugin() ?? []
		);

		$enqueued = array_filter(
			array_merge( $scripts ?? [], $styles ?? [] ),
			fn( $asset ) => ! empty( $asset['enqueued'] )
		);

		return [
			'scripts'        => $scripts,
			'styles'         => $styles,
			'scripts_count'  => count( $scripts ),
			'styles_count'   => count( $styles ),
			'enqueued_count' => count( $enqueued ),
			'hooks'          => $this->get_hooks_by_plugin(),
		];
	}

	protected function merge_registered_and_enqueued( array $registered, array $enqueued ): array {
		$map = [];
		foreach ( $registered as $item ) {
			$map[$item['handle']] = $item;
		}

		foreach ( $enqueued as $item ) {
			if ( isset( $map[$item['handle']] ) ) {
				$map[$item['handle']]['enqueued'] = true;
			} else {
				$map[$item['handle']] = [
					'handle'   => $item['handle'],
					'src'      => $item['src'],
					'enqueued' => true,
				];
			}
		}

		return array_values( $map );
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
						return ( new ReflectionMethod( $class, $method ) )->getFileName();
					}
				} elseif ( function_exists( $callback ) ) {
					return ( new ReflectionFunction( $callback ) )->getFileName();
				}
			} elseif ( is_array( $callback ) ) {
				if ( is_object( $callback[0] ) || class_exists( $callback[0] ) ) {
					return ( new ReflectionMethod( $callback[0], $callback[1] ) )->getFileName();
				}
			} elseif ( $callback instanceof \Closure ) {
				return ( new ReflectionFunction( $callback ) )->getFileName();
			}
               } catch ( \ReflectionException $e ) {
                       error_log( $e->getMessage() );

                       return null;
               }

               return null;
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
                $registered_scripts = $wp_scripts && isset( $wp_scripts->registered ) ? $wp_scripts->registered : [];
                foreach ( $registered_scripts as $handle => $data ) {
			if ( isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
				$found[] = ['handle' => $handle, 'src' => $data->src];
			}
		}

		return $this->enrich_asset_metrics( $found );
	}

	public function get_enqueued_scripts_by_plugin(): array {
		global $wp_scripts;
		$found = [];
                $queued_scripts = $wp_scripts && isset( $wp_scripts->queue ) ? $wp_scripts->queue : [];
                foreach ( $queued_scripts as $handle ) {
                        $data = $wp_scripts && isset( $wp_scripts->registered[$handle] ) ? $wp_scripts->registered[$handle] : null;
			if ( $data && isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
				$found[] = ['handle' => $handle, 'src' => $data->src];
			}
		}

		return $found;
	}

	public function get_styles_by_plugin(): array {
		global $wp_styles;
		$found = [];
                $registered_styles = $wp_styles && isset( $wp_styles->registered ) ? $wp_styles->registered : [];
                foreach ( $registered_styles as $handle => $data ) {
			if ( isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
				$found[] = ['handle' => $handle, 'src' => $data->src];
			}
		}

		return $this->enrich_asset_metrics( $found );
	}

	public function get_enqueued_styles_by_plugin(): array {
		global $wp_styles;
		$found = [];
                $queued_styles = $wp_styles && isset( $wp_styles->queue ) ? $wp_styles->queue : [];
                foreach ( $queued_styles as $handle ) {
                        $data = $wp_styles && isset( $wp_styles->registered[$handle] ) ? $wp_styles->registered[$handle] : null;
			if ( $data && isset( $data->src ) && strpos( wp_normalize_path( $data->src ), "/{$this->slug}/" ) !== false ) {
				$found[] = ['handle' => $handle, 'src' => $data->src];
			}
		}

		return $found;
	}

	protected function enrich_asset_metrics( array $assets ): array {
		foreach ( $assets as &$asset ) {
			$full_url = $asset['src'];

			// Only handle full URLs
			if ( ! filter_var( $full_url, FILTER_VALIDATE_URL ) ) {
				$asset['load_time_ms'] = null;
				$asset['size_kb']      = null;
				continue;
			}

			$start    = microtime( true );
			$response = wp_remote_get( $full_url );
			$elapsed  = ( microtime( true ) - $start ) * 1000;

			if ( is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) !== 200 ) {
				$asset['load_time_ms'] = null;
				$asset['size_kb']      = null;
				continue;
			}

			$asset['load_time_ms'] = round( $elapsed, 2 );
			$asset_body            = wp_remote_retrieve_body( $response );
			$size_bytes            = strlen( $asset_body );
			$asset['size_kb']      = round( $size_bytes / 1024, 2 ); // Convert to kilobytes
		}

		return $assets;
	}

}
