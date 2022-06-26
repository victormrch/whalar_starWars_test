import * as React from 'react';
import { LayoutProps } from '../layout.vm';
import { CenteredLayoutContainer } from './centered.layout.style';

export const CenteredLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
