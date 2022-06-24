export function getLastPage(
	totalCharacter: number,
	characterPerPage: number,
	actualPage: number
) {
	const totalPages = Math.ceil(totalCharacter / characterPerPage);

	if (totalPages === actualPage) return true;
	return false;
}
