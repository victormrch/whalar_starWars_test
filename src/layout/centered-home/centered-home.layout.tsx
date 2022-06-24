import * as React from 'react';
import { CenteredLayoutProps } from '../layout.vm';
import { CenteredLayoutContainer } from './centered-home.layout.style';

export const CenteredHomeLayout: React.FC<CenteredLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
