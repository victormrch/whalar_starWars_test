import styled from 'styled-components';
import {
	buttonPrincipalColor,
	fontSecondaryColor,
	fontTerciaryColor,
} from '../../core/theme/app.style';
import { PersonBadge } from '@styled-icons/bootstrap/PersonBadge';
import { Film } from '@styled-icons/bootstrap/Film';
import { Backspace } from '@styled-icons/bootstrap/Backspace';
import tattoine from '../../assets/tattoine.jpeg';

export const CharacterDetailGoBackContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const CharacterDetailButtonContainer = styled.div`
	@media (max-width: 500px) {
		display: none;
	}
`;

export const CharacterDetailGoBackIcon = styled(Backspace)`
	height: 3.125rem;
	width: 3.125rem;
	color: ${buttonPrincipalColor};

	:hover {
		cursor: pointer;
	}
`;

export const CharactersDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90vw;
	justify-content: space-evenly;
`;

export const CharactersDetailsCharacteristicsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 0.938rem;
	box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
		rgb(0 0 0 / 30%) 0px 3px 7px -3px;
	background-color: ${fontTerciaryColor};
	height: 30%;
	color: ${fontSecondaryColor};
	background: url(${tattoine});
	background-size: cover;
	background-position: center center;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		height: 100%;
		gap: 0;
	}
`;

export const CharacterDetailSpan = styled.span`
	color: ${fontTerciaryColor};
`;

export const CharacterDetailsTitleContainer = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 0.125rem solid ${buttonPrincipalColor};
	margin: 1rem 0 1rem 0;

	@media (max-width: 500px) {
		margin: 2rem 0 2rem 0;
	}
`;
export const CharacterDetailsTitleIcon = styled(PersonBadge)`
	height: 3.125rem;
	width: 3.125rem;
	color: ${buttonPrincipalColor};
`;
export const CharactersDetailsTitle = styled.h1`
	margin: 0.625rem;
`;

export const CharacterDetailsFilmContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0 1rem 0;
	border-bottom: 0.125rem solid ${buttonPrincipalColor};

	@media (max-width: 500px) {
		margin: 2rem 0 2rem 0;
	}
`;

export const CharacterDetailsFilmIcon = styled(Film)`
	height: 3.125rem;
	width: 3.125rem;
	color: ${buttonPrincipalColor};
`;

export const CharactersDetailsFilm = styled.li`
	font-size: 1.875rem;
	margin-bottom: 0.313rem;

	@media (max-width: 425px) {
		font-size: 1.25rem;
	}
`;
