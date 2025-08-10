export default function PerformanceSection( { insights } ) {
	const rows = [
		{
			label: 'HPOS Enabled',
			description:
				'Indicates if High Performance Order Storage feature is active.',
			value: insights.hpos_enabled ? 'Yes' : 'No',
		},
		{
			label: 'Scheduled Actions',
			description: 'Number of pending actions in ActionScheduler.',
			value: insights.scheduled_actions,
		},
		{
			label: 'High Product Variation Count',
			description: 'Warns when product variations exceed 2,000.',
			value: insights.high_variation_count ? 'Yes' : 'No',
		},
		{
			label: 'Unused Product Tags',
			description: 'Tags without any products attached.',
			value: insights.unused_product_tags,
		},
		{
			label: 'Woo Styles/JS on All Pages',
			description:
				'Checks if WooCommerce scripts and styles are enqueued globally.',
			value: insights.styles_js_global ? 'Yes' : 'No',
		},
		{
			label: 'Transients (wc_*)',
			description: 'Count of WooCommerce transients in wp_options.',
			value: insights.wc_transients,
		},
		{
			label: 'Cart Fragments Sitewide',
			description:
				'Detects if wc-ajax=get_refreshed_fragments loads on every page, which hurts caching.',
			value: insights.cart_fragments_sitewide ? 'Yes' : 'No',
		},
	];

	return (
		<div
			id="ba-dashboard__woo_insights"
			className="ba-dashboard__content__section"
		>
			<h4 className="ba-dashboard__content__section__title">
				Performance Features
			</h4>
			<p className="ba-dashboard__content__section__desc">
				Review behaviors and settings that may be affecting WooCommerce
				performance.
			</p>
			<div className="ba-dashboard__content__section__data">
				<table>
					<thead>
						<tr>
							<th className="feature">Feature</th>
							<th className="description">Description</th>
						</tr>
					</thead>
					<tbody>
						{ rows.map( ( row, idx ) => (
							<tr key={ idx }>
								<td className="feature">
									{ row.label } — { row.value }
								</td>
								<td className="description">
									{ row.description }
								</td>
							</tr>
						) ) }
					</tbody>
				</table>
			</div>
			{ insights.outdated_templates &&
				insights.outdated_templates.length > 0 && (
					<div
						className="ba-dashboard__content__section__data"
						id="ba-dashboard__woo_outdated_templates"
					>
						<h5>Outdated Templates</h5>
						<table>
							<thead>
								<tr>
									<th>Template</th>
									<th>Version</th>
									<th>Core Version</th>
								</tr>
							</thead>
							<tbody>
								{ insights.outdated_templates.map(
									( tpl, i ) => (
										<tr key={ i }>
											<td>
												{ tpl.file || tpl.template }
											</td>
											<td>
												{ tpl.version ||
													tpl.file_version ||
													'-' }
											</td>
											<td>{ tpl.core_version || '-' }</td>
										</tr>
									)
								) }
							</tbody>
						</table>
					</div>
				) }
		</div>
	);
}
