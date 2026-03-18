/** @format */

import { type ReactNode, useEffect, useRef } from "react";

interface IButton {
	children: ReactNode;
	customClass?: string;
}

function Button({ children, customClass = "" }: IButton) {
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		const audio = new Audio("/sound-effect/click.wav");
		audio.volume = 0.5;
		audio.preload = "auto";

		audio.load();

		audioRef.current = audio;
	}, []);

	const playClick = () => {
		const audio = audioRef.current;
		if (!audio) return;

		audio.currentTime = 0;
		audio.play();
	};

	return (
		<button
			onMouseDown={playClick}
			className={`border-3 border-black bg-primary text-white cursor-crosshair
			shadow-[4px_4px_0px_black]
			active:translate-y-1 active:shadow-none
			transition-all duration-100 ${customClass}`}
		>
			{children}
		</button>
	);
}

export default Button;
