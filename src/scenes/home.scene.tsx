import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonButton } from '../common/components/common-button';
import { routes } from '../core/router/routes';
import { CenteredHomeLayout } from '../layout';
import { TextIntroComponent } from '../pods/text-intro';

export const HomeScene: React.FC = () => {
	const navigate = useNavigate();

	const HandleClickStart = () => {
		navigate(routes.character_list);
	};
	return (
		<>
			<CenteredHomeLayout>
				<TextIntroComponent />
				<CommonButton buttonName='Start' onClick={HandleClickStart} />
			</CenteredHomeLayout>
		</>
	);
};
