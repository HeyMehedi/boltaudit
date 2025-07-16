import ContentLoading from '@components/ContentLoading';
import CountUp from '@components/CountUp';
import ReactSVG from 'react-inlinesvg';
import { useEffect, useState, useMemo } from '@wordpress/element';

import postData from '@helper/postData';

import arrowRightIcon from '@icon/arrow-right.svg';
import infoIcon from '@icon/info-circled.svg';

export default function PluginsSection() {
	const perPage = 10;
	const [ plugins, setPlugins ] = useState( [] );
	const [ counts, setCounts ] = useState( null );
	const [ total, setTotal ] = useState( null );
	const [ page, setPage ] = useState( 1 );
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		let cancelled = false;

		async function fetchPage( p ) {
			const res = await postData( 'boltaudit/reports/plugins', {
				page: p,
				per_page: perPage,
			} );

			if ( ! res || cancelled ) return;

			setPlugins( ( prev ) => [ ...prev, ...res.plugins ] );
			setCounts( res?.counts ?? 1 );
			setTotal( res?.total_plugins ?? 1 );

			if ( p * perPage < res.total_plugins ) {
				setPage( p + 1 );
			} else {
				setLoading( false );
			}
		}

		fetchPage( page );

		return () => {
			cancelled = true;
		};
	}, [ page ] );

	const pluginData = useMemo( () => {
		if ( total === null ) {
			return null;
		}

		const finalCounts = counts
			? counts
			: { total: total, active: 0, inactive: 0, abandoned: 0 };

		return {
			plugins,
			counts: finalCounts,
		};
	}, [ plugins, counts, total ] );

	return pluginData ? (
		<div
			id="ba-dashboard__plugins"
			className="ba-dashboard__content__section"
		>
			<h4 className="ba-dashboard__content__section__title">
				Plugin Audit
			</h4>

			<p className="ba-dashboard__content__section__desc">
				Get a quick overview of your site’s plugins—what’s active,
				inactive, outdated, or abandoned.
				<br />
				Spot bloat, reduce risks, and keep your stack lean by
				identifying what’s helping and what’s just hanging around.
			</p>

			<div className="ba-dashboard__content__section__content">
				<div className="ba-dashboard__content__section__overview equal-height">
					<div className="ba-dashboard__content__section__overview__single">
						<span className="ba-dashboard__content__section__overview__title">
							Total
						</span>
						<span className="ba-dashboard__content__section__overview__count">
							<CountUp target={ pluginData?.counts.total } />
						</span>
					</div>
					<div className="ba-dashboard__content__section__overview__single">
						<span className="ba-dashboard__content__section__overview__title">
							Active
						</span>
						<span className="ba-dashboard__content__section__overview__count">
							<CountUp target={ pluginData?.counts.active } />
						</span>
					</div>
					<div className="ba-dashboard__content__section__overview__single">
						<span className="ba-dashboard__content__section__overview__title">
							Inactive
						</span>
						<span className="ba-dashboard__content__section__overview__count">
							<CountUp target={ pluginData?.counts.inactive } />
						</span>
					</div>
					<div className="ba-dashboard__content__section__overview__single">
						<span className="ba-dashboard__content__section__overview__title">
							Abandoned
						</span>
						<span className="ba-dashboard__content__section__overview__count">
							<CountUp target={ pluginData?.counts.abandoned } />
						</span>
					</div>
				</div>

				<div className="ba-dashboard__content__section__data">
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>
									Details
									<span className="bs-dashboard-tooltip">
										<ReactSVG
											src={ infoIcon }
											width={ 16 }
											height={ 16 }
										/>
										<span className="bs-dashboard-tooltip-content">
											Upcoming
										</span>
									</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{ pluginData?.plugins.map( ( plugin, index ) => (
								<tr key={ index }>
									<td className="plugin-name">
										{ plugin.name }
										<div className="flex gap-1 mt-1 flex-wrap">
											{ plugin.is_active ? (
												<span className="plugin-badge active">
													Active
												</span>
											) : (
												<span className="plugin-badge inactive">
													Inctive
												</span>
											) }
											{ /* {plugin.is_wp_repo && (
												<span className="plugin-badge community">
													Community
												</span>
											)} */ }
											{ plugin.needs_upgrade && (
												<span className="plugin-badge upgrade">
													Outdated
												</span>
											) }
											{ plugin.is_abandoned && (
												<span className="plugin-badge abandoned">
													Abandoned
												</span>
											) }
										</div>
									</td>
									<td>
										<a href="#" className="action">
											Check{ ' ' }
											<ReactSVG
												src={ arrowRightIcon }
												width={ 16 }
												height={ 16 }
											/>
										</a>
									</td>
								</tr>
							) ) }
						</tbody>
					</table>
				</div>
			</div>
		</div>
	) : (
		<ContentLoading />
	);
}
