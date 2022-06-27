import * as React from 'react';
import { LayoutProps } from '../layout.vm';
import { CenteredLayoutContainer } from './centered-home.layout.style';

export const CenteredHomeLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
