import {
	START_FETCH_CHARACTER_DETAILS,
	SUCCESS_FETCH_CHARACTER_DETAILS,
	ERROR_FETCH_CHARACTER_DETAILS,
} from '../types';

const initialState = {
	character: [],
	isLoading: false,
	isFetching: false,
	isSuccess: false,
	isError: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case START_FETCH_CHARACTER_DETAILS:
			return {
				...state,
				isLoading: action.payload,
				isFetching: action.payload,
				isSuccess: false,
			};
		case SUCCESS_FETCH_CHARACTER_DETAILS:
			return {
				...state,
				isLoading: false,
				isFetching: false,
				isSuccess: true,
				character: action.payload,
			};
		case ERROR_FETCH_CHARACTER_DETAILS:
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
