import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
	CharacterDetailsScene,
	CharactersListScene,
	HomeScene,
} from '../../scenes';

import { switchRoutes } from './routes';

interface RouterProps {
	children?: React.ReactNode;
}

export const AppRouter: React.FC<RouterProps> = ({ children }) => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={switchRoutes.home} element={<HomeScene />} />
				<Route
					path={switchRoutes.character_list}
					element={<CharactersListScene />}
				/>
				<Route
					path={switchRoutes.character_details}
					element={<CharacterDetailsScene />}
				/>
			</Routes>
		</BrowserRouter>
	);
};
