import * as React from 'react';
import { LayoutProps } from '../layout.vm';
import { CenteredPodLayoutContainer } from './centered-pod.style';

export const CenteredPodLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<CenteredPodLayoutContainer>{children}</CenteredPodLayoutContainer>
		</>
	);
};
