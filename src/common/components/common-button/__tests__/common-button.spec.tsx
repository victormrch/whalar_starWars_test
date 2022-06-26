import { CommonButton } from '../index';
import { render, screen } from '@testing-library/react';

describe('CommonButton component specs', () => {
	it('should render correctly and create snapshot', () => {
		const message = 'Test';

		const { asFragment } = render(<CommonButton buttonName={message} />);

		expect(asFragment()).toMatchSnapshot();
	});
	it('should display the message when pass the buttonName prop', () => {
		const message = 'Test Message';

		render(<CommonButton buttonName={message} />);

		const element = screen.getByRole('button', {
			name: /test message/i,
		});

		expect(element).not.toBeNull();
		expect(element).toBeInTheDocument();
		expect(element.tagName).toEqual('BUTTON');
		expect(element.textContent).toBe('Test Message');
	});
});
