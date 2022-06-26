import { TextIntroComponent } from '../index';
import { render, screen } from '@testing-library/react';

describe('TextIntro component specs', () => {
	it('should render correctly and create snapshot', () => {
		const { asFragment } = render(<TextIntroComponent />);
		expect(asFragment()).toMatchSnapshot();
	});
	it('should display the title and description container', () => {
		render(<TextIntroComponent />);

		const descriptionText = `This is Whalar's technical test for the position of Frontend Developer. The young padawan, Victor Ramon, will demonstrate his skills in front of the senate to achieve his dream of joining the Jedi order of Whalar. His lightsaber forged with React, Redux, Typescript, Styled components and packaged with Vite will help him on his way to dazzle the great Jedi masters.`;

		const title = screen.getByRole('heading', {
			name: /A long time ago in a galaxy far, far away.../i,
		});

		const description = screen.getByRole('heading', {
			name: descriptionText,
		});

		expect(description).not.toBeNull();

		expect(title).not.toBeNull();
		expect(title).toBeInTheDocument();
		expect(title.tagName).toEqual('H1');
		expect(title.textContent).toBe(
			'A long time ago in a galaxy far,  far away...'
		);
	});
});
