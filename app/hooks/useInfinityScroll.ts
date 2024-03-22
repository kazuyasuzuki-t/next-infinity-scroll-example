import { type RefObject, useCallback, useEffect, useState } from "react";

export const useInfinityScroll = <T>(
	ref: RefObject<HTMLElement>,
	fetch: (page: number) => Promise<T[]>,
) => {
	const [data, setData] = useState<T[]>([]);
	const [page, setPage] = useState<number>(1);

	const scrollObserver = useCallback(
		() =>
			new IntersectionObserver((entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						fetch(page).then((data) => {
							setPage((prev) => prev + 1);
							setData((oldValue) => [...oldValue, ...data]);
						});
					}
				}
			}),
		[page, fetch],
	);

	useEffect(() => {
		const target = ref.current;
		if (target) {
			const observer = scrollObserver();
			observer.observe(target);
			return () => {
				observer.unobserve(target);
			};
		}
	}, [scrollObserver, ref]);

	return data;
};
