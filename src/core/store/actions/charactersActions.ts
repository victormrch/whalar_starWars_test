import {
	START_FETCH_CHARACTERS,
	SUCCESS_FETCH_CHARACTERS,
	ERROR_FETCH_CHARACTERS,
} from '../types';

interface Payload {
	type: string;
	payload: any;
}

export function fetchCharactersAction(url: string) {
	return async (dispatch: (payload: Payload) => void) => {
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

const successFetchCharacters = (characters: string[]) => ({
	type: SUCCESS_FETCH_CHARACTERS,
	payload: characters,
});
const errorFetchCharacters = () => ({
	type: ERROR_FETCH_CHARACTERS,
	payload: true,
});
