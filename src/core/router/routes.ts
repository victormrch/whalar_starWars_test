import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
	home: string;
	character_list: string;
	character_details: string;
}

export const switchRoutes: SwitchRoutes = {
	home: '/',
	character_list: 'character_list',
	character_details: 'character_details/:id',
};

interface Routes extends Omit<SwitchRoutes, 'character_details'> {
	character_details: (id: string) => string;
}

export const routes: Routes = {
	...switchRoutes,
	character_details: (id: string) =>
		generatePath(switchRoutes.character_details, { id }),
};
