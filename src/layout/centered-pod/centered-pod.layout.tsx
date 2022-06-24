import * as React from 'react';
import { CenteredLayoutProps } from '../layout.vm';
import { CenteredPodLayoutContainer } from './centered-pod.style';

export const CenteredPodLayout: React.FC<CenteredLayoutProps> = ({
	children,
}) => {
	return (
		<>
			<CenteredPodLayoutContainer>{children}</CenteredPodLayoutContainer>
		</>
	);
};
