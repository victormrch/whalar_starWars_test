import React from 'react';
import { Loader, LoaderTitle } from './loader.style';

export const LoaderComponent: React.FC = () => {
	return (
		<>
			<Loader />
			<LoaderTitle>Loading...</LoaderTitle>
		</>
	);
};
