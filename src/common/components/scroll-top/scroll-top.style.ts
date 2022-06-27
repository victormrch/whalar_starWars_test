import styled from 'styled-components';
import { ArrowUpCircleFill } from '@styled-icons/bootstrap/ArrowUpCircleFill';
import {
	fontPrimaryColor,
	fontTerciaryColor,
} from '../../../core/theme/app.style';

export const ScrollContainer = styled.div`
	position: relative;
`;

export const ScrollIcon = styled(ArrowUpCircleFill)`
	position: fixed;
	bottom: 8.75rem;
	right: 1.563rem;
	z-index: 20;

	background: ${fontTerciaryColor};
	color: ${fontPrimaryColor};
	border: 0.125rem solid ${fontPrimaryColor};

	border-radius: 50%;
	height: 3.125rem;
	width: 3.125rem;

	cursor: pointer;

	:hover {
		background: ${fontPrimaryColor};
		color: ${fontTerciaryColor};
		border: 0.125rem solid ${fontTerciaryColor};
	}
`;
