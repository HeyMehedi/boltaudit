import CountUp from '@components/CountUp';

export default function OverviewSection( { summary } ) {
	const items = [
		{ label: 'Products', value: summary.products || 0 },
		{ label: 'Variations', value: summary.variations || 0 },
		{ label: 'Orders', value: summary.orders || 0 },
		{ label: 'Coupons', value: summary.coupons || 0 },
		{ label: 'Categories', value: summary.categories || 0 },
		{ label: 'Attributes/Terms', value: summary.attribute_terms || 0 },
	];

	return (
		<div
			id="ba-dashboard__woo_summary"
			className="ba-dashboard__content__section"
		>
			<h4 className="ba-dashboard__content__section__title">
				WooCommerce Summary
			</h4>
			<p className="ba-dashboard__content__section__desc">
				Snapshot of your store's scale including products, orders and
				taxonomy counts.
			</p>
			<div className="ba-dashboard__content__section__overview">
				{ items.map( ( item ) => (
					<div
						className="ba-dashboard__content__section__overview__single"
						key={ item.label }
					>
						<span className="ba-dashboard__content__section__overview__title">
							{ item.label }
						</span>
						<span className="ba-dashboard__content__section__overview__count">
							<CountUp target={ item.value } />
						</span>
					</div>
				) ) }
			</div>
		</div>
	);
}
