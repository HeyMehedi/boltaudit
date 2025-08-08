<?php
namespace BoltAudit\App\Repositories;

class PostsRepository {

	// Cache properties to store results once queried
	protected static ?int $cached_total_posts          = null;
	protected static ?array $cached_post_types         = null;
	protected static ?array $cached_post_types_orphans = [];
	protected static ?int $cached_revisions            = null;
	protected static ?int $cached_post_meta_total      = null;
	protected static ?array $cached_post_meta_by_type  = null;
	protected static ?array $cached_percentages        = null;
	protected static ?array $cached_suggestions        = null;

	public static function get_posts_count() {
		if ( null !== self::$cached_total_posts ) {
			return self::$cached_total_posts;
		}

		global $wpdb;
		self::$cached_total_posts = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type NOT IN ('revision', 'nav_menu_item')" );

		return self::$cached_total_posts;
	}

	public static function get_post_type_counts() {
		if ( null !== self::$cached_post_types ) {
			return self::$cached_post_types;
		}

		global $wpdb;
		$results = $wpdb->get_results( "
            SELECT post_type, COUNT(*) as count
            FROM {$wpdb->posts}
            WHERE post_type NOT IN ('revision', 'nav_menu_item')
            GROUP BY post_type
        ", ARRAY_A );

		$output = [];
		foreach ( $results as $row ) {
			$output[$row['post_type']] = (int) $row['count'];
		}

		// Add orphaned posts
		$registered   = get_post_types();
		$orphan_count = 0;

		foreach ( $output as $post_type => $count ) {
			if ( ! in_array( $post_type, $registered, true ) ) {
				$orphan_count += $count;
				unset( $output[$post_type] ); // we'll bucket them under _orphaned_posts
				self::$cached_post_types_orphans[$post_type] = $count;
			}
		}

		if ( $orphan_count > 0 ) {
			$output['_orphaned_posts'] = $orphan_count;
		}

		self::$cached_post_types = $output;

		return $output;
	}

	public static function get_post_revisions_count() {
		if ( null !== self::$cached_revisions ) {
			return self::$cached_revisions;
		}

		global $wpdb;
		self::$cached_revisions = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type = 'revision'" );

		return self::$cached_revisions;
	}

	public static function get_post_meta_count() {
		if ( null !== self::$cached_post_meta_total ) {
			return self::$cached_post_meta_total;
		}

		global $wpdb;
		self::$cached_post_meta_total = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->postmeta}" );

		return self::$cached_post_meta_total;
	}

	public static function get_post_type_meta_counts() {
		if ( null !== self::$cached_post_meta_by_type ) {
			return self::$cached_post_meta_by_type;
		}

		global $wpdb;
		$results = $wpdb->get_results( "
            SELECT p.post_type, COUNT(pm.meta_id) as meta_count
            FROM {$wpdb->posts} p
            JOIN {$wpdb->postmeta} pm ON p.ID = pm.post_id
            WHERE p.post_type NOT IN ('revision', 'nav_menu_item')
            GROUP BY p.post_type
        ", ARRAY_A );

		$output = [];
		foreach ( $results as $row ) {
			$output[$row['post_type']] = (int) $row['meta_count'];
		}

		// Count orphaned meta: meta with no matching post
		$orphaned_meta_count = (int) $wpdb->get_var( "
			SELECT COUNT(*) FROM {$wpdb->postmeta} pm
			LEFT JOIN {$wpdb->posts} p ON pm.post_id = p.ID
			WHERE p.ID IS NULL
		" );

		if ( $orphaned_meta_count > 0 ) {
			$output['_orphaned_meta'] = $orphaned_meta_count;
		}

		self::$cached_post_meta_by_type = $output;

		return $output;
	}

	public static function get_percentage_breakdown() {
		if ( null !== self::$cached_percentages ) {
			return self::$cached_percentages;
		}

		$total_posts        = self::get_posts_count();
		$total_postmeta     = self::get_post_meta_count();
		$post_type_counts   = self::get_post_type_counts();
		$orphan_type_counts = self::get_orphaned_post_types();
		$post_meta_by_type  = self::get_post_type_meta_counts();

		$percent_post_types = [];
		$percent_meta_types = [];

		// Registered post type percentages.
		foreach ( $post_type_counts as $type => $count ) {
			if ( '_orphaned_posts' === $type ) {
				continue;
			}

			$percent_post_types[$type] = $total_posts > 0 ? round( ( $count / $total_posts ) * 100, 2 ) : 0;
		}

		// Percentages for individual orphaned post types.
		foreach ( $orphan_type_counts as $type => $count ) {
			$percent_post_types[$type] = $total_posts > 0 ? round( ( $count / $total_posts ) * 100, 2 ) : 0;
		}

		// Aggregate orphan percentage under a single key for overall metrics.
		if ( ! empty( $orphan_type_counts ) ) {
			$percent_post_types['_orphaned_posts'] = $total_posts > 0 ? round( ( array_sum( $orphan_type_counts ) / $total_posts ) * 100, 2 ) : 0;
		}

		// Meta percentages include both registered and orphaned types plus orphaned meta.
		foreach ( $post_meta_by_type as $type => $count ) {
			$percent_meta_types[$type] = $total_postmeta > 0 ? round( ( $count / $total_postmeta ) * 100, 2 ) : 0;
		}

		self::$cached_percentages = [
			'post_type_percentage' => $percent_post_types,
			'post_meta_percentage' => $percent_meta_types,
		];

		return self::$cached_percentages;
	}

	public static function get_orphaned_post_meta_count() {
		global $wpdb;

		// Meta records with no matching post
		$query = "
            SELECT COUNT(*)
            FROM {$wpdb->postmeta} pm
            LEFT JOIN {$wpdb->posts} p ON pm.post_id = p.ID
            WHERE p.ID IS NULL
        ";

		return (int) $wpdb->get_var( $query );
	}

	public static function get_orphaned_posts_count() {
		global $wpdb;

		// First, get all registered post types in WP
		$registered_post_types = get_post_types();

		// Prepare SQL IN list safely
		$in_list = "'" . implode( "','", array_map( 'esc_sql', $registered_post_types ) ) . "'";

		$query = "
            SELECT COUNT(*)
            FROM {$wpdb->posts}
            WHERE post_type NOT IN ({$in_list})
        ";

		return (int) $wpdb->get_var( $query );
	}

	public static function get_orphaned_post_types() {
		return self::$cached_post_types_orphans ?? [];
	}

	public static function get_all() {
		return [
			'total_posts'         => self::get_posts_count(),
			'post_types'          => self::get_post_type_counts(),
			'post_types_orphaned' => self::get_orphaned_post_types(),
			'revisions'           => self::get_post_revisions_count(),
			'post_meta_total'     => self::get_post_meta_count(),
			'post_meta_by_type'   => self::get_post_type_meta_counts(),
			'percentages'         => self::get_percentage_breakdown(),
		];
	}

	/**
	 * Retrieve detailed information for each post type including counts,
	 * metadata and their relative percentages. Results are grouped by
	 * registered and orphaned post types to make it easy to analyse and
	 * clean up content.
	 */
	public static function get_all_details() {
		$post_types = self::get_post_type_counts();
		$post_meta  = self::get_post_type_meta_counts();

		// Calculate percentage breakdowns once to avoid repeated work.
		$percentages    = self::get_percentage_breakdown();
		$post_type_perc = $percentages['post_type_percentage'] ?? [];
		$post_meta_perc = $percentages['post_meta_percentage'] ?? [];

		$registered = [];
		foreach ( $post_types as $type => $count ) {
			if ( '_orphaned_posts' === $type ) {
				continue;
			}

			$registered[$type] = [
				'count'           => $count,
				'meta'            => $post_meta[$type] ?? 0,
				'percentage'      => $post_type_perc[$type] ?? 0,
				'meta_percentage' => $post_meta_perc[$type] ?? 0,
			];
		}

		$orphaned = [];
		foreach ( self::get_orphaned_post_types() as $type => $count ) {
			$orphaned[$type] = [
				'count'           => $count,
				'meta'            => $post_meta[$type] ?? 0,
				'percentage'      => $post_type_perc[$type] ?? 0,
				'meta_percentage' => $post_meta_perc[$type] ?? 0,
			];
		}

		return [
			'total_posts'     => self::get_posts_count(),
			'post_meta_total' => self::get_post_meta_count(),
			'revisions'       => self::get_post_revisions_count(),
			'registered'      => $registered,
			'orphaned'        => $orphaned,
		];
	}
}
