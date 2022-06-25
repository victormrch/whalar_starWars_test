import {
	START_FETCH_FILMS,
	SUCCESS_FETCH_FILMS,
	ERROR_FETCH_FILMS,
} from '../types';

export function fetchFilmsAction(urls) {
	return async dispatch => {
		dispatch(startFetchFilms());

		const fetchJson = url => fetch(url).then(res => res.json());

		Promise.all(urls.map(fetchJson))
			.then(films => {
				const filmsTitles = [];
				films.forEach(name => filmsTitles.push(name.title));

				dispatch(successFetchFilms(filmsTitles));
			})
			.catch(error => {
				dispatch(errorFetchFilms(error));
			});
	};
}

const startFetchFilms = () => ({
	type: START_FETCH_FILMS,
	payload: true,
});

const successFetchFilms = films => ({
	type: SUCCESS_FETCH_FILMS,
	payload: films,
});
const errorFetchFilms = () => ({
	type: ERROR_FETCH_FILMS,
	payload: true,
});
