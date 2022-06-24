import styled from 'styled-components';

export const CharactersListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

export const CharacterListTitle = styled.h1`
	text-transform: capitalize;
	color: #ecb900;
	padding-left: 50px;
	font-size: 50px; ;
`;

export const CharactersListCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.625rem;
	width: 16.25rem;
	height: 8.5rem;
	border-radius: 15px;
	box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
		rgb(0 0 0 / 30%) 0px 3px 7px -3px;
	background-color: white;
	color: black;
`;

export const CharacterListTitleContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-around;
`;
export const CharacterListInfoContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-around;
`;
