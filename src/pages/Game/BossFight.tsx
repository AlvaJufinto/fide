/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { useParams } from 'react-router';

import { api } from '@/api';
import BgImg from '@/assets/game/stages/level-1.png';
import CharacterArea from '@/components/Debate/CharacterArea';
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

	const currentSpeaker: Speaker = game.finished
		? "player"
		: game.isThinking
			? "boss"
			: "player";

	return (
		<div className="relative w-full h-screen flex flex-col overflow-hidden">
			{/* BG */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${BgImg})` }}
			>
				<div className="absolute inset-0 bg-black/60" />
			</div>

			<div className="relative z-10 flex flex-col h-full max-w-3xl mx-auto w-full px-4">
				{/* HEADER */}
				<div className="bg-white border-4 border-black p-4 shadow-custom mt-4">
					<Button customClass="py-2 px-4" to={`/chapter/${chapter.slug}`}>
						{"<"} Back
					</Button>

					<div className="w-full h-2 mt-4 bg-black" />

					<LessonHeader chapter={chapter} section={section} />
				</div>

				{/* CHARACTERS */}
				<div className="mt-3">
					<CharacterArea
						currentSpeaker={currentSpeaker}
						isThinking={game.isThinking}
					/>
				</div>

				{/* CHAT BOX */}
				<div className="flex-1 min-h-0 bg-white/90 border-4 border-black mt-3 flex flex-col overflow-hidden">
					{/* TOP BAR */}
					<div className="flex justify-between px-4 py-2 border-b-2 border-black bg-gray-100 text-xs font-bold">
						<span>
							Question {Math.min(game.currentIndex + 1, game.maxQuestions)} /{" "}
							{game.maxQuestions}
						</span>
						<span>Score: {game.score} / 100</span>
					</div>

					{/* CHAT */}
					<div className="flex-1 overflow-y-auto">
						<ChatLog messages={game.chatLog} />
					</div>

					{/* INPUT / RESULT */}
					<div className="border-t-4 border-black p-3 bg-white">
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
									className="flex-1 border-2 border-black px-3 py-2 text-sm"
									placeholder={
										game.isThinking
											? "Waiting judge..."
											: "Type your argument..."
									}
								/>

								<Button
									type="submit"
									disabled={game.isThinking || !game.playerAnswer.trim()}
									customClass="border-2 border-black px-5 py-2 bg-black text-white"
								>
									Submit
								</Button>
							</form>
						) : (
							<div className="relative">
								{/* WIN */}
								{game.result === "win" && (
									<div className="p-4 border-4 border-green-500 bg-green-100 text-center animate-bounce-in">
										<p className="text-2xl font-black text-green-700">
											VICTORY
										</p>
										<p className="text-lg mt-1">{game.score} / 100</p>

										<div className="mt-2 animate-confetti text-2xl">
											🎉 🎉 🎉
										</div>
									</div>
								)}

								{/* LOSE */}
								{game.result === "lose" && (
									<div className="p-4 border-4 border-red-500 bg-red-100 text-center animate-shake">
										<p className="text-2xl font-black text-red-700">DEFEAT</p>
										<p className="text-sm">Score too low. Try again.</p>
										<p className="text-lg mt-1">{game.score} / 100</p>

										<Button
											onClick={game.resetGame}
											customClass="mt-3 border-2 border-black px-4 py-1 bg-black text-white"
										>
											Retry
										</Button>
									</div>
								)}
							</div>
						)}
					</div>
				</div>

				<div className="h-4" />
			</div>
		</div>
	);
}
