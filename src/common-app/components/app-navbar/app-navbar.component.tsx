import React from 'react';
import { NavBarContainer, NavBarLogo } from './app-navbar.style';
import logo from '../../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../core/router/routes';

export const AppNavbar: React.FC = () => {
	const navigate = useNavigate();
	const HandleClickHome = () => {
		navigate(routes.home);
	};

	return (
		<>
			<NavBarContainer>
				<NavBarLogo
					src={logo}
					alt='Logo star Wars Icon'
					onClick={HandleClickHome}
				></NavBarLogo>
			</NavBarContainer>
		</>
	);
};
