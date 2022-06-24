export function getIdCharacter(url: string) {
	const splitUrl = url.split('/');
	return splitUrl[splitUrl.length - 2];
}
