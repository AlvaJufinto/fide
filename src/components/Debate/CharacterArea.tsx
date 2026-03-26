/** @format */

import Brother from '@/assets/game/brother.png';
import Martin from '@/assets/game/stages/final-boss.png';
import type { Speaker } from '@/interfaces/debate';

export default function CharacterArea({
	currentSpeaker,
	isThinking,
}: {
	currentSpeaker: Speaker;
	isThinking: boolean;
}) {
	return (
		<div className="flex justify-between items-end px-5">
			{/* Player */}
			<div
				className={`relative flex flex-col items-center ${
					currentSpeaker === "player" ? "animate-float-pixel" : ""
				}`}
			>
				<img
					src={Brother}
					className={`h-48 transition-all duration-300 ${
						currentSpeaker === "player" ? "scale-110 opacity-100" : "opacity-40"
					}`}
				/>
				<span className="mt-1 text-xs px-2 py-1 font-bold bg-blue-500 text-white">
					{currentSpeaker === "player" && isThinking ? "Thinking..." : "You"}
				</span>
			</div>

			<div className="text-5xl self-center border-4 border-black bg-white p-4 shadow-custom">
				VS
			</div>

			{/* Boss */}
			<div
				className={`relative flex flex-col items-center ${
					currentSpeaker === "boss" ? "animate-float-pixel" : ""
				}`}
			>
				<img
					src={Martin}
					className={`h-40 transition-all duration-300 ${
						currentSpeaker === "boss" ? "scale-110 opacity-100" : "opacity-40"
					}`}
				/>
				<span className="mt-1 text-xs px-2 py-1 font-bold bg-red-500 text-white">
					{currentSpeaker === "boss" && isThinking
						? "Thinking..."
						: "Martin Luther"}
				</span>
			</div>
		</div>
	);
}
