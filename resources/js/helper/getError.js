import { __ } from '@wordpress/i18n';

export default function getErrorMessage( code ) {
	let errorMessage = '';
	switch ( code ) {
		case 404:
			errorMessage = __( 'Resource not found', 'ba-dashboard' );
			break;
		case 400:
			errorMessage = __( 'Invalid Request', 'ba-dashboard' );
			break;
		case 422:
			errorMessage = __( 'Invalid data', 'ba-dashboard' );
			break;
		case 500:
			errorMessage = __( 'Internal server error', 'ba-dashboard' );
			break;
		default:
			errorMessage = __( 'Technical error', 'ba-dashboard' );
			break;
	}
	return errorMessage;
}
