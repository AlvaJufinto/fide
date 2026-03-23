/** @format */

import {
	type ButtonHTMLAttributes,
	type ReactNode,
	useEffect,
	useRef,
} from "react";

import { Link, type LinkProps } from "react-router";

type ButtonProps = {
	children: ReactNode;
	customClass?: string;
	to?: LinkProps["to"];
} & ButtonHTMLAttributes<HTMLButtonElement> &
	Partial<LinkProps>;

function Button({ children, customClass = "", to, ...props }: ButtonProps) {
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

	const className = `border-3 border-black bg-primary text-white cursor-crosshair
	shadow-[4px_4px_0px_black]
	active:translate-y-1 active:shadow-none
	transition-all duration-100 ${customClass}`;

	// 🔥 kalau ada `to` → pakai React Router Link
	if (to) {
		return (
			<Link
				// @ts-ignore
				to={to}
				onMouseDown={playClick}
				className={className}
				{...(props as LinkProps)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			onMouseDown={playClick}
			className={className}
			{...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	);
}

export default Button;
