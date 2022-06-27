import {
	START_FETCH_FILMS,
	SUCCESS_FETCH_FILMS,
	ERROR_FETCH_FILMS,
} from '../types';

interface FilmState {
	films: Array<string>;
	isLoadingFilms: boolean;
	isFetchingFilms: boolean;
	isSuccessFilms: boolean;
	isErrorFilms: boolean;
}

const initialState = {
	films: [],
	isLoadingFilms: false,
	isFetchingFilms: false,
	isSuccessFilms: false,
	isErrorFilms: false,
};

export default function (state: FilmState = initialState, action: any) {
	switch (action.type) {
		case START_FETCH_FILMS:
			return {
				...state,
				isLoadingFilms: action.payload,
				isFetchingFilms: action.payload,
				isSuccessFilms: false,
			};
		case SUCCESS_FETCH_FILMS:
			return {
				...state,
				isLoadingFilms: false,
				isFetchingFilms: false,
				isSuccessFilms: true,
				films: action.payload,
			};
		case ERROR_FETCH_FILMS:
			return {
				...state,
				isFetchingFilms: false,
				isLoadingFilms: false,
				isErrorFilms: action.payload,
			};
		default:
			return state;
	}
}
