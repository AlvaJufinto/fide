/** @format */

import { useEffect, useRef, useState } from "react";

import Abraham from "@/assets/home/abraham.png";
import Alva from "@/assets/home/alva.png";

import SectionHead from "./SectionHead";

const members = [
	{
		name: "Abraham Gregorius Anderson Thio",
		image: Abraham,
		role: "Backend Developer",
		description:
			"Builds and maintains the server, database, and core logic of Fide.",
	},
	{
		name: "Stanislaus Alva Jufinto",
		image: Alva,
		role: "Designer & Frontend Developer",
		description: "I like to learn about GOD!",
	},
];

function AboutUs() {
	const [selected, setSelected] = useState<number | null>(null);

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
		<div className="mt-36 outer-container">
			<div className="inner-container flex flex-col items-center text-center">
				<SectionHead
					title="About Us"
					description="Our goal is to make foundational Catholic teachings more accessible. By combining thoughtful content with a gamified learning experience, Fide encourages consistent learning and a deeper appreciation of the Catholic tradition."
				/>

				<h1 className="mt-16 text-2xl font-bold border-4 border-black px-6 py-2 bg-white shadow-[4px_4px_0px_black]">
					SELECT YOUR CHARACTER
				</h1>

				<p className="mt-4 max-w-xl text-sm font-bold">
					Choose your character to learn more about the creators behind Fide.
				</p>

				<div className="flex flex-wrap justify-center mt-12 gap-10">
					{members.map((member, i) => {
						const isSelected = selected === i;

						return (
							<div
								key={i}
								onClick={() => {
									setSelected(i);
									playClick();
								}}
								className={`group relative w-56 ${
									isSelected ? "h-105" : "h-80"
								} bg-white border-4 cursor-pointer
								transition-all duration-200
								${
									isSelected
										? "border-yellow-400 shadow-[6px_6px_0px_black] -translate-x-1 -translate-y-1 animate-float-pixel"
										: "border-black shadow-[4px_4px_0px_black] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_black]"
								}`}
							>
								{isSelected && (
									<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 border-2 border-black px-2 text-xs font-bold">
										ACTIVE
									</div>
								)}

								{isSelected && (
									<div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10px] border-2 border-black px-2 bg-white">
										PROFILE
									</div>
								)}

								<div className="absolute top-2 left-2 text-xs font-bold">
									FIDE
								</div>

								<div className="absolute top-2 right-2 text-xs font-bold">
									PLAYER {String(i + 1).padStart(2, "0")}
								</div>

								<div className="relative w-full h-44 mt-6 px-4">
									<img
										src={member.image}
										alt={`${member.name} pixel`}
										className="absolute inset-0 w-full h-full object-cover image-pixel group-hover:opacity-0"
									/>

									<img
										src={member.image}
										alt={member.name}
										className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
									/>
								</div>

								<div className="mt-4 px-3 text-center">
									<h1 className="text-sm font-bold leading-tight">
										{member.name}
									</h1>
									<p className="text-xs mt-1">{member.role}</p>
								</div>

								<div
									className={`px-3 mt-3 text-xs text-center transition-all duration-200 ${
										isSelected
											? "opacity-100 translate-y-0"
											: "opacity-0 -translate-y-2 pointer-events-none"
									}`}
								>
									<p className="border-2 border-black p-2 bg-gray-100">
										{member.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
