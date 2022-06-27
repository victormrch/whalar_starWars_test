import { ErrorComponent } from '../index';
import { render, screen } from '@testing-library/react';

describe('Error component spec', () => {
	it('should render correctly and create snapshot', () => {
		const { asFragment } = render(<ErrorComponent />);

		expect(asFragment()).toMatchSnapshot();
	});
	it('should display and image and title in component', () => {
		const title = `Sorry, an error has ocurred!. We are trying to fix it! Please try again later!`;
		const imageTitle = 'R2D2 and C3PO error';
		render(<ErrorComponent />);

		const elementTitle = screen.getByRole('heading', {
			name: title,
		});

		const elementImage = screen.getByRole('img', {
			name: imageTitle,
		});

		expect(elementTitle).not.toBeNull();
		expect(elementTitle).toBeInTheDocument();
		expect(elementTitle.tagName).toEqual('H1');
		expect(elementTitle.textContent).toBe(title);

		expect(elementImage).not.toBeNull();
		expect(elementImage).toBeInTheDocument();
		expect(elementImage.tagName).toEqual('IMG');
	});
});
