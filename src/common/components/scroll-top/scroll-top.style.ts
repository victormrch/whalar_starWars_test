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
	bottom: 175px;
	right: 25px;
	z-index: 20;

	background: ${fontTerciaryColor};
	color: ${fontPrimaryColor};
	border: 2px solid ${fontPrimaryColor};

	border-radius: 50%;
	height: 50px;
	width: 50px;

	cursor: pointer;

	:hover {
		background: ${fontPrimaryColor};
		color: ${fontTerciaryColor};
		border: 2px solid ${fontTerciaryColor};
	}
`;
