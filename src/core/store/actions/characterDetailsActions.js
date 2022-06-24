import {
	START_FETCH_CHARACTER_DETAILS,
	SUCCESS_FETCH_CHARACTER_DETAILS,
	ERROR_FETCH_CHARACTER_DETAILS,
} from '../types';

const BASE_URL = 'https://swapi.dev/api/people/';

export function fetchCharactersDetailsAction(id) {
	return async dispatch => {
		dispatch(startFetchCharactersDetails());

		try {
			const response = await fetch(`${BASE_URL}${id}`);
			const data = await response.json();
			dispatch(successFetchCharactersDetails(data));
		} catch (error) {
			console.log(error);
			dispatch(FetchCharactersDetails());
		}
	};
}

const startFetchCharactersDetails = () => ({
	type: START_FETCH_CHARACTER_DETAILS,
	payload: true,
});

const successFetchCharactersDetails = character => ({
	type: SUCCESS_FETCH_CHARACTER_DETAILS,
	payload: character,
});
const FetchCharactersDetails = () => ({
	type: ERROR_FETCH_CHARACTER_DETAILS,
	payload: true,
});
