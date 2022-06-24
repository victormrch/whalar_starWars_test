import React from 'react';
import { CenteredLayout } from '../layout';
import { CharacterDetailsComponent } from '../pods/characters-details';

export const CharacterDetailsScene: React.FC = () => {
	return (
		<>
			<CenteredLayout>
				<CharacterDetailsComponent />
			</CenteredLayout>
		</>
	);
};
