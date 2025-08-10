import ContentLoading from '@components/ContentLoading';
import { lazy, Suspense } from '@wordpress/element';

const OverviewSection = lazy( () => import( './OverviewSection' ) );
const PerformanceSection = lazy( () => import( './PerformanceSection' ) );

export default function WooDetailsModule( { data } ) {
	if ( ! data ) {
		return <ContentLoading />;
	}

	return (
		<>
			<Suspense fallback={ <ContentLoading /> }>
				<OverviewSection summary={ data.summary || {} } />
			</Suspense>
			<Suspense fallback={ <ContentLoading /> }>
				<PerformanceSection insights={ data.insights || {} } />
			</Suspense>
		</>
	);
}
