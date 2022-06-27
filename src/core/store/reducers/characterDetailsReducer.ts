import {
	START_FETCH_CHARACTER_DETAILS,
	SUCCESS_FETCH_CHARACTER_DETAILS,
	ERROR_FETCH_CHARACTER_DETAILS,
} from '../types';

interface character {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: Array<string>;
	species: Array<string>;
	vehicles: Array<string>;
	starships: Array<string>;
	created: string;
	edited: string;
	url: string;
}

interface characterDetail {
	character: Array<character>;
	isLoading: boolean;
	isFetching: boolean;
	isSuccess: boolean;
	isError: boolean;
}

const initialState = {
	character: [],
	isLoading: false,
	isFetching: false,
	isSuccess: false,
	isError: false,
};

export default function (state: characterDetail = initialState, action: any) {
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
