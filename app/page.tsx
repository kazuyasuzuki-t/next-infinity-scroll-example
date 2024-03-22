"use client";
import { useRef } from "react";
import { useInfinityScroll } from "./hooks/useInfinityScroll";
import { perOneHundred } from "./numGenerator";
export default function App() {
	const ulBottomRef = useRef<HTMLDivElement>(null);
	const { data, isLoading } = useInfinityScroll(ulBottomRef, perOneHundred);
	return (
		<div>
			<ul>
				{data.map((num) => (
					<li key={num}>{num}</li>
				))}
				<div ref={ulBottomRef} />
			</ul>
			{isLoading && <p>Loading...</p>}
		</div>
	);
}
