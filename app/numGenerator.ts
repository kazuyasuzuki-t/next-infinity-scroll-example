export const perOneHundred = async (page: number): Promise<number[]> => {
	function* range(start: number, end: number) {
		for (let i = start; i < end; i++) {
			yield i;
		}
	}
	return new Promise((resolve) => {
		resolve(Array.from(range((page - 1) * 100, page * 100)));
	});
};
