import React from 'react';
import error from '../../../assets/c3po_error.png';
import { ErrorImage, ErrorTitle } from './error.style';

export const ErrorComponent: React.FC = () => {
	return (
		<>
			<ErrorImage src={error} alt='R2D2 and C3PO error' />
			<ErrorTitle>
				Sorry, an error has ocurred!. We are trying to fix it! <br />
				Please try again later!
			</ErrorTitle>
		</>
	);
};
