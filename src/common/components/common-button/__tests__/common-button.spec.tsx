import { CommonButton } from '../common-button.component';
import { render } from '@testing-library/react';

describe('CommonButton component', () => {
	it('should render correctly', () => {
		const { asFragment } = render(<CommonButton buttonName={'start'} />);

		expect(asFragment()).toMatchSnapshot();
	});
});

// describe('Renders main page correctly', () => {
// 	expect(true).toBeTruthy();
// });
