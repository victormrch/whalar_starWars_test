import styled from 'styled-components';
import { fontTerciaryColor } from '../../../core/theme/app.style';

export const FooterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 8.5rem;
	border-top: 0.063rem solid ${fontTerciaryColor};
	margin-top: 2.5rem;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

export const FooterLeftContainer = styled.div`
	color: #87c0e4;
	display: flex;
	align-items: center;
	gap: 0.625rem;
	padding: 0.625rem;
`;

export const FooterRightContainer = styled.div`
	color: #a0c178;
	display: flex;
	align-items: center;
	gap: 0.625rem;
	padding: 0.625rem;
`;

export const FooterIconLeft = styled.img`
	width: 3.5rem;
	height: 3.5rem;
`;

export const FooterIconRight = styled.img`
	width: 6.5rem;
	height: 6.5rem;
	margin-top: -1.875rem;
`;
