import * as React from 'react';
import { CenteredLayoutContainer } from './centered-home.layout.style';

interface CenteredLayoutProps {
	children?: React.ReactNode;
}

export const CenteredHomeLayout: React.FC<CenteredLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<CenteredLayoutContainer>{children}</CenteredLayoutContainer>
		</>
	);
};
