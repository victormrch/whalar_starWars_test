import styled from 'styled-components';
import { fontPrimaryColor } from '../../../core/theme/app.style';

export const NavBarContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 6rem;
	border-bottom: 0.063rem solid ${fontPrimaryColor};
	margin-bottom: 2.5rem;

	:hover {
		cursor: pointer;
	}

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const NavBarLogo = styled.img`
	height: 80%;
	width: 50%;
`;
