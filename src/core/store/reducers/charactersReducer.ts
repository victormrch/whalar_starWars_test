import {
	START_FETCH_CHARACTERS,
	SUCCESS_FETCH_CHARACTERS,
	ERROR_FETCH_CHARACTERS,
} from '../types';

interface Pagination {
	count: number;
	next: string;
	previous: string | null;
}

interface Character {
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

interface CharactersState {
	characters: Array<Character>;
	pagination: Pagination;
	isLoading: boolean;
	isFetching: boolean;
	isSuccess: boolean;
	isError: boolean;
}

const initialState = {
	characters: [],
	pagination: {
		count: 0,
		next: 'https://swapi.dev/api/people/?page=1',
		previous: null,
		results: undefined,
	},
	isLoading: false,
	isFetching: false,
	isSuccess: false,
	isError: false,
};

export default function (state: CharactersState = initialState, action: any) {
	switch (action.type) {
		case START_FETCH_CHARACTERS:
			return {
				...state,
				isLoading: action.payload,
				isFetching: action.payload,
				isSuccess: false,
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
