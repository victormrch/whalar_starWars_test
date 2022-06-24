import React from 'react';
import {
	TextIntroDescription,
	TextIntroDescriptionContainer,
	TextIntroTitle,
	TextIntroTitleContainer,
} from './text-intro.style';

export const TextIntroComponent: React.FC = () => {
	return (
		<>
			<TextIntroTitle>
				A long time ago in a galaxy far, <br /> far away...
			</TextIntroTitle>

			<TextIntroDescriptionContainer>
				<TextIntroDescription>
					This is Whalar&#39;s technical test for the position of Frontend
					Developer. <br />
					The young padawan, Victor Ramon, will demonstrate his skills in front
					of the senate to achieve his dream of joining the Jedi order of
					Whalar. <br />
					His lightsaber forged with React, Redux, Typescript, Styled components
					and packaged with Vite will help him on his way to dazzle the great
					Jedi masters.
				</TextIntroDescription>
			</TextIntroDescriptionContainer>
		</>
	);
};
