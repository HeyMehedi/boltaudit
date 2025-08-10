import { useEffect, useMemo, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import menuIcon from '@icon/reader.svg';

const Sidebar = ( props ) => {
	const [ activeSection, setActiveSection ] = useState( '' );
	const [ isSidebarFixed, setIsSidebarFixed ] = useState( false );

	const { page } = props;

	// Determine which sections to display based on the current page. This keeps
	// the navigation focused and relevant.
	const sections = useMemo( () => {
		if ( page === 'pluginDetails' ) {
			return [
				{ id: 'ba-dashboard__styles_scripts', name: 'Assets' },
			];
		}

		if ( page === 'postDetails' ) {
			return [
				{ id: 'ba-dashboard__post_summary', name: 'Summary' },
				{ id: 'ba-dashboard__registered_post_types', name: 'Registered' },
				{ id: 'ba-dashboard__orphan_post_types', name: 'Orphaned' },
			];
		}

		if ( page === 'databaseDetails' ) {
			return [
				{ id: 'ba-dashboard__database_summary', name: 'Summary' },
				{ id: 'ba-dashboard__database_tables', name: 'Tables' },
				{ id: 'ba-dashboard__database_empty_tables', name: 'Empty' },
				{ id: 'ba-dashboard__database_autoloaded_options', name: 'Autoloaded' },
				{ id: 'ba-dashboard__database_index_efficiency', name: 'Index' },
			];
		}

		if ( page === 'wooDetails' ) {
			return [
				{ id: 'ba-dashboard__woo_summary', name: 'Summary' },
				{ id: 'ba-dashboard__woo_insights', name: 'Performance' },
			];
		}

		return [
			{ id: 'ba-dashboard__post', name: 'Post Types' },
			{ id: 'ba-dashboard__database', name: 'Database' },
			{ id: 'ba-dashboard__plugins', name: 'Plugins' },
			...( boltaudit_data?.hasWooCommerce
				? [ { id: 'ba-dashboard__woocommerce', name: 'WooCommerce' } ]
				: [] ),
			{ id: 'ba-dashboard__environment', name: 'Environment' },
		];
	}, [ page ] );

	// Scroll to the selected section without altering the hash based route.
	function handleSection( item ) {
		setActiveSection( item );

		const el = document.getElementById( item );
		if ( el ) {
			window.requestAnimationFrame( () => {
				el.scrollIntoView( { behavior: 'smooth', block: 'start' } );
			} );
		}
	}

	useEffect( () => {
		const sectionIds = sections.map( ( section ) => section.id );

		const handleScroll = () => {
			const scrollPosition = window.scrollY + 100;

			let current = sectionIds[ 0 ];
			for ( const id of sectionIds ) {
				const el = document.getElementById( id );
				if ( el && el.offsetTop <= scrollPosition ) {
					current = id;
				}
			}
			setActiveSection( current );
			setIsSidebarFixed( window.scrollY >= 200 );
		};

		window.addEventListener( 'scroll', handleScroll );
		handleScroll(); // initialize on mount

		return () => window.removeEventListener( 'scroll', handleScroll );
	}, [ sections ] );

	return (
		<aside className={ `ba-dashboard__sidebar ${ isSidebarFixed ? 'sidebar-fixed' : '' }` }>
			<ul className="ba-dashboard__sidebar__menu">
				{ sections.map( ( section ) => (
					<li key={ section.id } className="ba-dashboard__sidebar__menu__item">
						<a
							href="#"
							className={ `ba-dashboard__sidebar__menu__link ${ activeSection === section.id ? 'active' : '' }` }
							onClick={ ( e ) => {
								e.preventDefault();
								handleSection( section.id );
							} }
						>
							<ReactSVG src={ menuIcon } width={ 20 } height={ 20 } />
							{ section.name }
						</a>
					</li>
				) ) }
			</ul>
		</aside>
	);
};

export default Sidebar;
