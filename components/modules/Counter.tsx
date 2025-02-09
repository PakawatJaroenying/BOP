import { useEffect, useState } from "react";

interface CounterProps {
	end: number;
	duration: number;
}

export default function Counter({ end, duration }: CounterProps) {
	const [count, setCount] = useState(0);

	useEffect(() => {
		let start = 0;
		const incrementTime = (duration / end) * 1000;
		const timer = setInterval(() => {
			start += 1;
			setCount(start);
			if (start === end) clearInterval(timer);
		}, incrementTime);
		return () => clearInterval(timer);
	}, [end, duration]);

	return (
		<div className="text-5xl font-bold text-teal-600   headline">
			{count}
		</div>
	);
}
