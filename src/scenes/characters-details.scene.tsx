import React from 'react';
import { ScrollToTop } from '../common/components/scroll-top';
import { CenteredPodLayout } from '../layout';
import { AppLayout } from '../layout/app.layout/app.layout';
import { CharacterDetailsComponent } from '../pods/characters-details';

export const CharacterDetailsScene: React.FC = () => {
	return (
		<>
			<AppLayout>
				<ScrollToTop />
				<CenteredPodLayout>
					<CharacterDetailsComponent />
				</CenteredPodLayout>
			</AppLayout>
		</>
	);
};
