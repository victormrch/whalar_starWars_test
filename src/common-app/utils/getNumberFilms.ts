export function getNumberFilms(films: Array<string>) {
	const numberOfFilms = films.length;

	return films.length === 1
		? `${numberOfFilms} film`
		: `${numberOfFilms} films`;
}
