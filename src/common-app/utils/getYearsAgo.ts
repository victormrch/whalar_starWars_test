export function getYearsAgo(date: string) {
	const filmDate: any = new Date(date);
	const today: any = new Date();

	const diffTime = Math.abs(today - filmDate);
	const diffDays = Math.ceil(diffTime / 31536000000);

	return `${diffDays} years ago`;
}
