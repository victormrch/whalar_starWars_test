import {
	START_FETCH_FILMS,
	SUCCESS_FETCH_FILMS,
	ERROR_FETCH_FILMS,
} from '../types';

interface Payload {
	type: string;
	payload: any;
}

interface Parsefilms {
	title: string;
	release: string;
}

export function fetchFilmsAction(urls: Array<string>) {
	return async (dispatch: (payload: Payload) => void) => {
		dispatch(startFetchFilms());

		const fetchJson = (url: string) => fetch(url).then(res => res.json());

		Promise.all(urls.map(fetchJson))
			.then(films => {
				const parseFilms: Parsefilms[] = films.map(film => ({
					title: film.title,
					release: film.release_date,
				}));

				dispatch(successFetchFilms(parseFilms));
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

const successFetchFilms = (films: Parsefilms[]) => ({
	type: SUCCESS_FETCH_FILMS,
	payload: films,
});
const errorFetchFilms = () => ({
	type: ERROR_FETCH_FILMS,
	payload: true,
});
