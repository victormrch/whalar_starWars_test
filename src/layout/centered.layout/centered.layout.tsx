import * as React from 'react';
import { CenteredLayoutProps } from '../layout.vm';
import { CenteredLayoutContainer } from './centered.layout.style';

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
