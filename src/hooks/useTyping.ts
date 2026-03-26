/** @format */

import {
	useEffect,
	useState,
} from 'react';

export default function useTyping(text: string, speed = 20) {
	const [displayed, setDisplayed] = useState("");
	const [index, setIndex] = useState(0);

	// RESET saat text berubah
	useEffect(() => {
		setDisplayed("");
		setIndex(0);
	}, [text]);

	useEffect(() => {
		if (index >= text.length) return;

		const timeout = setTimeout(() => {
			setDisplayed((prev) => prev + text[index]);
			setIndex((prev) => prev + 1);
		}, speed);

		return () => clearTimeout(timeout);
	}, [index, text, speed]);

	return displayed;
}
