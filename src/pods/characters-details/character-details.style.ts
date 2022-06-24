import styled from 'styled-components';

export const CharactersDetailsContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90vw;
	height: 100vh;
	justify-content: space-evenly;
`;

export const CharactersDetailsTitle = styled.h1`
	margin: 0.625rem;
`;

export const CharactersDetailsCharacteristicsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;
	align-items: center;
	gap: 10px;
	margin: 0.625rem;
	border-radius: 15px;
	box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px,
		rgb(0 0 0 / 30%) 0px 3px 7px -3px;
	background-color: white;
	width: 100%;
	height: 30%;
	color: black;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		height: 100%;
		gap: 0;
	}
`;
