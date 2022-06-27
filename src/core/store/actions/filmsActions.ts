import {
	START_FETCH_FILMS,
	SUCCESS_FETCH_FILMS,
	ERROR_FETCH_FILMS,
} from '../types';

interface payload {
	type: string;
	payload: any;
}

export function fetchFilmsAction(urls: Array<string>) {
	return async (dispatch: (payload: payload) => void) => {
		dispatch(startFetchFilms());

		const fetchJson = (url: string) => fetch(url).then(res => res.json());

		Promise.all(urls.map(fetchJson))
			.then(films => {
				const filmsTitles: Array<String> = [];
				films.forEach(name => filmsTitles.push(name.title));

				dispatch(successFetchFilms(filmsTitles));
			})
			.catch(error => {
				console.log(error);
				dispatch(errorFetchFilms());
			});
	};
}

const startFetchFilms = () => ({
	type: START_FETCH_FILMS,
	payload: true,
});

const successFetchFilms = (films: String[]) => ({
	type: SUCCESS_FETCH_FILMS,
	payload: films,
});
const errorFetchFilms = () => ({
	type: ERROR_FETCH_FILMS,
	payload: true,
});
