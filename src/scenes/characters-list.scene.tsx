import React from 'react';
import { ScrollToTop } from '../common/components/scroll-top';
import { AppLayout } from '../layout/app.layout/app.layout';
import { CharactersListComponent } from '../pods/characters-list';

export const CharactersListScene: React.FC = () => {
	return (
		<>
			<AppLayout>
				<ScrollToTop />
				<CharactersListComponent />
			</AppLayout>
		</>
	);
};
