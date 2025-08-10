import postData from '@helper/postData';
import AppLayout from '@layout/AppLayout';
import HomepageContentSidebarModule from '@modules/HomepageContentSidebar';
import WooDetailsModule from '@modules/WooDetailsContent';
import { useEffect, useState } from '@wordpress/element';

const WooCommerceDetailsPage = () => {
	const [ data, setData ] = useState( null );

	useEffect( () => {
		let cancelled = false;

		async function fetchData() {
			const res = await postData( 'boltaudit/reports/woocommerce' );
			if ( ! cancelled ) {
				setData( res );
			}
		}

		fetchData();

		return () => {
			cancelled = true;
		};
	}, [] );

	return (
		<AppLayout type="detailsHeader" page="wooDetails">
			<div className="ba-dashboard__content">
				<div className="ba-dashboard__content__wrapper">
					<WooDetailsModule data={ data } />
				</div>
				<HomepageContentSidebarModule />
			</div>
		</AppLayout>
	);
};

export default WooCommerceDetailsPage;
