import {
	START_FETCH_CHARACTERS,
	SUCCESS_FETCH_CHARACTERS,
	ERROR_FETCH_CHARACTERS,
} from '../types';

const initialState = {
	characters: [],
	pagination: {
		count: 0,
		next: 'https://swapi.dev/api/people/?page=1',
		previous: null,
	},
	isLoading: false,
	isFetching: false,
	isSuccess: false,
	isError: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case START_FETCH_CHARACTERS:
			return {
				...state,
				isLoading: action.payload,
				isFetching: action.payload,
			};
		case SUCCESS_FETCH_CHARACTERS:
			return {
				...state,
				isFetching: false,
				isLoading: false,
				isSuccess: true,
				pagination: {
					...action.payload,
					results: undefined,
				},
				characters: [...state.characters, ...action.payload.results],
			};
		case ERROR_FETCH_CHARACTERS:
			return {
				...state,
				isFetching: false,
				isLoading: false,
				isError: action.payload,
			};
		default:
			return state;
	}
}
