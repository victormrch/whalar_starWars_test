import {
	START_FETCH_CHARACTERS,
	SUCCESS_FETCH_CHARACTERS,
	ERROR_FETCH_CHARACTERS,
} from '../types';

const initialState = {
	characters: [],
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
			console.log('state:', state, 'action', action.payload);
			return {
				...state,
				isFetching: false,
				isLoading: false,
				isSuccess: true,
				characters: [
					...new Set([...state.characters, ...action.payload.results]),
				],

				// characters: action.payload,
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
