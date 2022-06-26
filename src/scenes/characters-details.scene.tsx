import React from 'react';
import { CenteredLayout } from '../layout';
import { AppLayout } from '../layout/app.layout/app.layout';
import { CharacterDetailsComponent } from '../pods/characters-details';

export const CharacterDetailsScene: React.FC = () => {
	return (
		<>
			<AppLayout>
				<CenteredLayout>
					<CharacterDetailsComponent />
				</CenteredLayout>
			</AppLayout>
		</>
	);
};
