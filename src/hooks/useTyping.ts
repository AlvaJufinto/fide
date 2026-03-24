/** @format */

import { useEffect, useRef, useState } from "react";

export default function useTyping(text: string, speed = 5) {
	const [displayed, setDisplayed] = useState("");
	const lastText = useRef("");

	useEffect(() => {
		if (text === lastText.current) return; // kalau sama, skip
		lastText.current = text;

		let i = 0;
		setDisplayed("");
		const interval = setInterval(() => {
			i++;
			setDisplayed(text.slice(0, i));
			if (i >= text.length) clearInterval(interval);
		}, speed);

		return () => clearInterval(interval);
	}, [text, speed]);

	return displayed;
}
