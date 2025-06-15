<?php
namespace BoltAudit\App\Repositories;

class PostsRepository {

	// Cache properties to store results once queried
	protected static ?int $cached_total_posts         = null;
	protected static ?array $cached_post_types        = null;
	protected static ?int $cached_revisions           = null;
	protected static ?int $cached_post_meta_total     = null;
	protected static ?array $cached_post_meta_by_type = null;
	protected static ?array $cached_percentages       = null;
	protected static ?array $cached_suggestions       = null;

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

		$total_posts       = self::get_posts_count();
		$total_postmeta    = self::get_post_meta_count();
		$post_type_counts  = self::get_post_type_counts();
		$post_meta_by_type = self::get_post_type_meta_counts();

		$percent_post_types = [];
		$percent_meta_types = [];

		foreach ( $post_type_counts as $type => $count ) {
			$percent_post_types[$type] = $total_posts > 0 ? round( ( $count / $total_posts ) * 100, 2 ) : 0;
		}

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

	public static function get_suggestions() {
		if ( null !== self::$cached_suggestions ) {
			return self::$cached_suggestions;
		}

		$total_posts       = self::get_posts_count();
		$post_types        = self::get_post_type_counts();
		$revisions         = self::get_post_revisions_count();
		$post_meta_total   = self::get_post_meta_count();
		$post_meta_by_type = self::get_post_type_meta_counts();

		$orphaned_post_meta_count = self::get_orphaned_post_meta_count();
		$orphaned_posts_count     = self::get_orphaned_posts_count();

		$suggestions = [];

		if ( $revisions > 1000 ) {
			$suggestions[] = "Woah, you have over 1,000 post revisions! Consider pruning revisions to boost performance.";
		} elseif ( $revisions > 100 ) {
			$suggestions[] = "You have quite a few post revisions. Cleanup could help reduce database size.";
		}

		if ( $post_meta_total > $total_posts * 20 ) {
			$suggestions[] = "High post meta count compared to posts (more than 20 meta per post). Audit custom fields and metadata for cleanup or optimization.";
		}

		foreach ( $post_types as $type => $count ) {
			$percentage = $total_posts > 0 ? ( $count / $total_posts ) * 100 : 0;
			if ( $percentage > 80 ) {
				$suggestions[] = "Over 80% of your posts are of type '{$type}'. Make sure this distribution matches your site’s needs.";
			}
			if ( ( $post_meta_by_type[$type] ?? 0 ) > $count * 50 ) {
				$suggestions[] = "Post type '{$type}' has heavy meta usage (avg > 50 meta per post). Consider optimizing metadata.";
			}
		}

		if ( isset( $post_types['draft'] ) && $post_types['draft'] > 500 ) {
			$suggestions[] = "You have a large number of drafts ({$post_types['draft']}). Review and clean up unused drafts.";
		}

		if ( $orphaned_post_meta_count > 0 ) {
			$suggestions[] = "You have {$orphaned_post_meta_count} orphaned post meta entries with no associated posts. Consider cleaning these up.";
		}

		if ( $orphaned_posts_count > 0 ) {
			$suggestions[] = "You have {$orphaned_posts_count} posts with unregistered or invalid post types. Investigate and clean these.";
		}

		if ( empty( $suggestions ) ) {
			$suggestions[] = "Your posts database looks clean and well-managed! Keep up the good work. 🌟";
		}

		self::$cached_suggestions = $suggestions;

		return $suggestions;
	}

	public static function get_all() {
		return [
			'total_posts'              => self::get_posts_count(),
			'post_types'               => self::get_post_type_counts(),
			'revisions'                => self::get_post_revisions_count(),
			'post_meta_total'          => self::get_post_meta_count(),
			'post_meta_by_type'        => self::get_post_type_meta_counts(),
			'percentages'              => self::get_percentage_breakdown(),
			'suggestions'              => self::get_suggestions(),
		];
	}
}
