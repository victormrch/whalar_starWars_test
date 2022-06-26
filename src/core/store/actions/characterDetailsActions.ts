import {
	START_FETCH_CHARACTER_DETAILS,
	SUCCESS_FETCH_CHARACTER_DETAILS,
	ERROR_FETCH_CHARACTER_DETAILS,
} from '../types';

interface payload {
	type: string;
	payload: any;
}

const BASE_URL = 'https://swapi.dev/api/people/';

export function fetchCharactersDetailsAction(id: string) {
	return async (dispatch: (payload: payload) => void) => {
		dispatch(startFetchCharactersDetails());

		try {
			const response = await fetch(`${BASE_URL}${id}`);
			const data = await response.json();
			dispatch(successFetchCharactersDetails(data));
		} catch (error) {
			console.log(error);
			dispatch(errorFetchCharactersDetails());
		}
	};
}

const startFetchCharactersDetails = () => ({
	type: START_FETCH_CHARACTER_DETAILS,
	payload: true,
});

const successFetchCharactersDetails = (character: string[]) => ({
	type: SUCCESS_FETCH_CHARACTER_DETAILS,
	payload: character,
});
const errorFetchCharactersDetails = () => ({
	type: ERROR_FETCH_CHARACTER_DETAILS,
	payload: true,
});
