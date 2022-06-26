import React from 'react';
import { AppLayout } from '../layout/app.layout/app.layout';
import { CharactersListComponent } from '../pods/characters-list';

export const CharactersListScene: React.FC = () => {
	return (
		<>
			<AppLayout>
				<CharactersListComponent />
			</AppLayout>
		</>
	);
};
