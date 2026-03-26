/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { useParams } from 'react-router';

import { api } from '@/api';
import Brother from '@/assets/game/brother.png';
import Martin from '@/assets/game/stages/final-boss.png';
import BgImg from '@/assets/game/stages/level-1.png';
import ChatLog from '@/components/Debate/ChatLog';
import LessonHeader from '@/components/Game/LessonHeader';
import LoadingScreen from '@/components/Game/LoadingScreen';
import Button from '@/components/ui/Button';
import useDebateGame from '@/hooks/useDebateGame';
import type {
	IChapter,
	ISection,
} from '@/interfaces/data';
import type { Speaker } from '@/interfaces/debate';

function CharacterArea({
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
				className={`relative flex flex-col items-center ${currentSpeaker === "player" ? "animate-float-pixel" : ""}`}
			>
				<img
					src={Brother}
					alt="Brother"
					className={`h-48 object-contain transition-all duration-300 ${
						currentSpeaker === "player" ? "scale-110 opacity-100" : "opacity-40"
					}`}
				/>
				<span
					className={`mt-1 text-xs px-2 py-1 font-bold ${
						currentSpeaker === "player"
							? "bg-blue-500 text-white"
							: "bg-gray-300 text-gray-600"
					}`}
				>
					{currentSpeaker === "player" && isThinking ? "Thinking..." : "You"}
				</span>
			</div>

			<div className="text-5xl self-center border-4 border-black bg-white p-4 shadow-custom">
				{" "}
				VS{" "}
			</div>

			{/* Boss */}
			<div
				className={`relative flex flex-col items-center ${currentSpeaker === "boss" ? "animate-float-pixel" : ""}`}
			>
				<img
					src={Martin}
					alt="Martin"
					className={`h-40 object-contain transition-all duration-300 ${
						currentSpeaker === "boss" ? "scale-110 opacity-100" : "opacity-40"
					}`}
				/>
				<span
					className={`mt-1 text-xs px-2 py-1 font-bold ${
						currentSpeaker === "boss"
							? "bg-red-500 text-white"
							: "bg-gray-300 text-gray-600"
					}`}
				>
					{currentSpeaker === "boss" && isThinking
						? "Thinking..."
						: "Martin Luther"}
				</span>
			</div>
		</div>
	);
}

export default function BossFight() {
	const { chapterSlug } = useParams();
	const [chapter, setChapter] = useState<IChapter | null>(null);
	const [section, setSection] = useState<ISection | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!chapterSlug) return;
		api
			.getChapterFull(chapterSlug)
			.then((res) => {
				if (res.success && res.data) {
					setChapter(res.data);
					const bossSection = res.data.sections.find(
						(s: ISection) => s.isFinalBoss && s.boss,
					);
					setSection(bossSection || null);
				}
			})
			.finally(() => setLoading(false));
	}, [chapterSlug]);

	const game = useDebateGame(section);

	if (loading) return <LoadingScreen />;
	if (!chapter || !section) return <div>Chapter or Boss not found</div>;

	// FIX speaker: boss is active while AI is thinking/responding
	const currentSpeaker: Speaker = game.finished
		? "player"
		: game.isThinking
			? "boss"
			: "player";

	return (
		<div className="relative w-full h-screen flex flex-col overflow-hidden">
			{/* Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${BgImg})` }}
			>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			{/* Content — full height flex column */}
			<div className="relative z-10 flex flex-col h-full max-w-3xl mx-auto w-full px-4">
				{/* Header */}
				<div className="bg-white border-black border-4 p-4 shadow-custom mt-4 shrink-0">
					<Button to={`/chapter/${chapter.slug}`} customClass="py-2 px-8">
						{"<"} Back
					</Button>
					<div className="w-full h-2 mt-4 bg-black" />
					<LessonHeader chapter={chapter} section={section} />
				</div>

				{/* Characters */}
				<div className="shrink-0 mt-3">
					<CharacterArea
						currentSpeaker={currentSpeaker}
						isThinking={game.isThinking}
					/>
				</div>

				{/* FIX 4: Chat area grows to fill remaining space, scrolls internally */}
				<div className="flex-1 min-h-0 bg-white/90 border-4 border-black mt-3 flex flex-col overflow-hidden">
					{/* Progress bar */}
					<div className="shrink-0 flex items-center justify-between px-4 py-2 border-b-2 border-black bg-gray-100 text-xs font-bold">
						<span>
							Question {Math.min(game.currentIndex + 1, game.maxQuestions)} /{" "}
							{game.maxQuestions}
						</span>
						<span>Score: {game.score} / 100</span>
					</div>

					{/* Scrollable messages */}
					<div className="flex-1 min-h-0 overflow-y-auto">
						<ChatLog messages={game.chatLog} />
					</div>

					{/* FIX 5: Input pinned at bottom, inside the chat box */}
					<div className="shrink-0 border-t-4 border-black p-3 bg-white">
						{!game.finished ? (
							<form
								onSubmit={(e) => {
									e.preventDefault();
									game.submitAnswer();
								}}
								className="flex gap-2"
							>
								<input
									type="text"
									value={game.playerAnswer}
									onChange={(e) => game.setPlayerAnswer(e.target.value)}
									disabled={game.isThinking}
									className="flex-1 border-2 border-black px-3 py-2 text-sm disabled:opacity-50"
									placeholder={
										game.isThinking
											? "Waiting for judge..."
											: "Type your argument..."
									}
								/>
								<Button
									type="submit"
									disabled={game.isThinking || !game.playerAnswer.trim()}
									customClass="border-2 border-black px-5 py-2 font-bold bg-black text-white disabled:opacity-40 hover:bg-gray-800 transition-colors"
								>
									Submit
								</Button>
							</form>
						) : (
							<div className="p-3 border-4 border-green-500 bg-green-100 text-center">
								<p className="font-bold text-lg">Debate Complete!</p>
								<p className="text-2xl font-black mt-1">{game.score} / 100</p>
							</div>
						)}
					</div>
				</div>

				{/* Bottom padding */}
				<div className="shrink-0 h-4" />
			</div>
		</div>
	);
}
