/** @format */

import { useEffect, useState } from "react";

import { getRandomQuote } from "../ui/PageLoading";

export default function LoadingScreen({
	message = "Loading Boss Fight...",
}: {
	message?: string;
}) {
	const [progress, setProgress] = useState(0);

	const [quote, setQuote] = useState(getRandomQuote());

	useEffect(() => {
		setQuote(getRandomQuote());
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				return prev + Math.floor(Math.random() * 5 + 1);
			});
		}, 100);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="fixed inset-0 flex flex-col justify-center items-center bg-white text-primary z-50">
			<p className="text-4xl font-bold uppercase">{message}</p>
			<div className="p-4 my-4 bg-gray-100 max-w-xl md:text-sm">
				<p className="italic mb-2 text-xl">{quote.text}</p>
				<p className="font-bold text-right mt-1 text-2xl">— {quote.author}</p>
			</div>
			<div className="w-3/4 h-10 bg-white overflow-hidden border-2 border-black">
				<div
					className="h-full bg-primary transition-all duration-100"
					style={{ width: `${Math.min(progress, 100)}%` }}
				/>
			</div>
			<p className="mt-2 text-2xl">{Math.min(progress, 100)}%</p>
		</div>
	);
}
