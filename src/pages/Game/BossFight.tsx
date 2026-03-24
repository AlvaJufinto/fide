/** @format */

import { useEffect, useRef, useState } from "react";

import { useParams } from "react-router";

import { api } from "@/api";
import Brother from "@/assets/game/brother.png";
import Martin from "@/assets/game/stages/final-boss.png";
import BgImg from "@/assets/game/stages/level-1.png";
import LessonHeader from "@/components/Game/LessonHeader";
import Button from "@/components/ui/Button";
import { getRandomQuote } from "@/components/ui/PageLoading";
import useDebateGame from "@/hooks/useDebateGame";
import type { IChapter, ISection } from "@/interfaces/data";
import type { ChatMessage, Speaker } from "@/interfaces/debate";

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

			<div className="text-5xl self-center border-4 border-black bg-white p-4">
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

function ChatLog({ messages }: { messages: ChatMessage[] }) {
	const bottomRef = useRef<HTMLDivElement>(null);

	// Auto-scroll to latest message
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		// FIX 4: fixed-height scrollable chat area, no overflow outside container
		<div className="flex flex-col gap-3 overflow-y-auto h-full px-4 py-3">
			{messages.map((msg, i) => {
				if (msg.from === "boss") {
					return (
						<div key={i} className="flex items-start gap-2 max-w-[80%]">
							<div className="border-2 border-red-500 bg-red-100 px-3 py-2 lg text-sm">
								<span className="font-bold text-red-700 block text-xs mb-1">
									Martin Luther
								</span>
								{msg.text}
							</div>
						</div>
					);
				}
				if (msg.from === "player") {
					return (
						<div
							key={i}
							className="flex items-start gap-2 max-w-[80%] ml-auto flex-row-reverse"
						>
							<div className="border-2 border-blue-500 bg-blue-100 px-3 py-2 lg text-sm">
								<span className="font-bold text-blue-700 block text-xs mb-1 text-right">
									You
								</span>
								{msg.text}
							</div>
						</div>
					);
				}
				// feedback
				return (
					<div
						key={i}
						className="mx-auto border-2 border-yellow-500 bg-yellow-100 px-3 py-2 lg text-sm text-center max-w-[90%]"
					>
						<span className="font-bold text-yellow-700 block text-xs mb-1">
							Judge's Feedback
						</span>
						{msg.text}
					</div>
				);
			})}
			<div ref={bottomRef} />
		</div>
	);
}

function LoadingScreen({
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
