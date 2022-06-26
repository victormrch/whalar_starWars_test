import React from 'react';
import { AppFooter } from '../../common-app/components/app-footer';
import { AppNavbar } from '../../common-app/components/app-navbar';
import { LayoutProps } from '../layout.vm';

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<AppNavbar />
			<main>{children}</main>
			<AppFooter />
		</>
	);
};
