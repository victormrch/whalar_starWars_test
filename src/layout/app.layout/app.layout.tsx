import React from 'react';
import { AppFooter } from '../../common-app/components/app-footer';
import { AppNavbar } from '../../common-app/components/app-navbar';
import { LayoutProps } from '../layout.vm';
import { AppLayoutContainer, AppLayoutMain } from './app.layout.style';

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<AppLayoutContainer>
				<AppNavbar />
				<AppLayoutMain>{children}</AppLayoutMain>
				<AppFooter />
			</AppLayoutContainer>
		</>
	);
};
