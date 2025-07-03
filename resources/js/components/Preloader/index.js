
import { PreloaderStyle } from './Style';

import Fav from '@images/fav.svg';

const Preloader = ( { style } ) => {
	const defaultStyle = { minHeight: '500px' };
	style = style ? { ...defaultStyle, ...style } : defaultStyle;

	return (
		<PreloaderStyle style={ style } className="ba-preloader">
			<img 
				src={ Fav } 
				alt="Logo" 
				className="ba-preloader__logo"
			/>
			<p>BoltAudit is running, gathering information.</p>
			{/* <div className="loader"></div> */}
		</PreloaderStyle>
	);
};

export default Preloader;
