import {
	START_FETCH_CHARACTERS,
	SUCCESS_FETCH_CHARACTERS,
	ERROR_FETCH_CHARACTERS,
} from '../types';

const BASE_URL = 'https://swapi.dev/api/';

export function fetchCharactersAction(url) {
	return async dispatch => {
		dispatch(startFetchCharacters());

		try {
			const response = await fetch(url);
			const data = await response.json();
			dispatch(successFetchCharacters(data));
		} catch (error) {
			console.log(error);
			dispatch(errorFetchCharacters());
		}
	};
}

const startFetchCharacters = () => ({
	type: START_FETCH_CHARACTERS,
	payload: true,
});

const successFetchCharacters = characters => ({
	type: SUCCESS_FETCH_CHARACTERS,
	payload: characters,
});
const errorFetchCharacters = () => ({
	type: ERROR_FETCH_CHARACTERS,
	payload: true,
});
