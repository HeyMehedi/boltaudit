<?php

namespace BoltAudit\App\Repositories;

class PostsRepository {

	public static function get_posts_count() {
		global $wpdb;

		return (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type NOT IN ('revision', 'nav_menu_item')" );
	}

	public static function get_post_type_counts() {
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

		return $output;
	}

	public static function get_post_revisions_count() {
		global $wpdb;

		return (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->posts} WHERE post_type = 'revision'" );
	}

	public static function get_post_meta_count() {
		global $wpdb;

		return (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->postmeta}" );
	}

	public static function get_post_type_meta_counts() {
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

		return $output;
	}

	public static function get_percentage_breakdown() {
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

		return [
			'post_type_percentage' => $percent_post_types,
			'post_meta_percentage' => $percent_meta_types,
		];
	}

	public static function get_all() {
		return [
			'total_posts'       => self::get_posts_count(),
			'post_types'        => self::get_post_type_counts(),
			'revisions'         => self::get_post_revisions_count(),
			'post_meta_total'   => self::get_post_meta_count(),
			'post_meta_by_type' => self::get_post_type_meta_counts(),
			'percentages'       => self::get_percentage_breakdown(),
		];
	}
}
