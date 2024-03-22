"use client";
import { useRef } from "react";
import { useInfinityScroll } from "./hooks/useInfinityScroll";
import { perOneHundred } from "./numGenerator";
export default function App() {
	const ulBottomRef = useRef<HTMLDivElement>(null);
	const data = useInfinityScroll(ulBottomRef, perOneHundred);
	return (
		<div>
			<ul>
				{data.map((num) => (
					<li key={num}>{num}</li>
				))}
				<div ref={ulBottomRef} />
			</ul>
		</div>
	);
}
