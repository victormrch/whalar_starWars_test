import * as React from 'react';
import { CenteredLayoutContainer } from './centered.layout.style';

interface CenteredLayoutProps {
	children?: React.ReactNode;
}

export const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
