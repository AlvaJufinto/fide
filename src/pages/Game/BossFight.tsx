/** @format */

import { useEffect, useState } from "react";

import { useParams } from "react-router";
import { create } from "zustand";

import Brother from "@/assets/game/brother.png";
import Martin from "@/assets/game/stages/final-boss.png";
import BgImg from "@/assets/game/stages/level-1.png";
import LessonHeader from "@/components/Game/LessonHeader";
import Button from "@/components/ui/Button";
import { chapters } from "@/data";
import type { IChapter, ISection } from "@/interfaces/data";

/* =========================
   TYPES
========================= */

type Speaker = "boss" | "player";

type Dialogue = {
	speaker: Speaker;
	text: string;
};

/* =========================
   DUMMY DATA
========================= */

const dummyBossLines = [
	"Your logic is flawed. Explain how three can be one.",
	"Clarify the distinction between nature and person.",
	"How do you preserve unity without contradiction?",
];

const expectedKeywords = [
	"essence",
	"person",
	"relation",
	"perichoresis",
	"being",
];

/* =========================
   ZUSTAND STORE
========================= */

type GameState = {
	dialogues: Dialogue[];
	turn: number;
	input: string;
	isThinking: boolean;
	currentSpeaker: Speaker;

	setInput: (val: string) => void;
	submitAnswer: () => void;
	addDialogue: (d: Dialogue) => void;
};

const useGameStore = create<GameState>((set, get) => ({
	dialogues: [{ speaker: "boss", text: dummyBossLines[0] }],
	turn: 0,
	input: "",
	isThinking: false,
	currentSpeaker: "boss",

	setInput: (val) => set({ input: val }),

	addDialogue: (d) =>
		set((state) => ({
			dialogues: [...state.dialogues, d],
		})),

	submitAnswer: () => {
		const { input, turn, dialogues } = get();
		if (!input.trim()) return;

		const lower = input.toLowerCase();

		const score = expectedKeywords.filter((k) => lower.includes(k)).length;

		let response = "";
		if (score >= 3) {
			response = "You argue well... but I'm not convinced yet.";
		} else if (score >= 1) {
			response = "Partial understanding. Refine your reasoning.";
		} else {
			response = "That doesn't address the core issue.";
		}

		const nextTurn = turn + 1;

		set({
			isThinking: true,
			currentSpeaker: "player",
			dialogues: [...dialogues, { speaker: "player", text: input }],
			input: "",
		});

		// simulate thinking delay
		setTimeout(() => {
			const nextLines: Dialogue[] = [{ speaker: "boss", text: response }];

			if (dummyBossLines[nextTurn]) {
				nextLines.push({
					speaker: "boss",
					text: dummyBossLines[nextTurn],
				});
			}

			set((state) => ({
				dialogues: [...state.dialogues, ...nextLines],
				turn: nextTurn,
				isThinking: false,
				currentSpeaker: "boss",
			}));
		}, 1200);
	},
}));

/* =========================
   COMPONENTS
========================= */

function GameHeader({
	chapter,
	section,
}: {
	chapter: IChapter;
	section: ISection;
}) {
	return (
		<div className="bg-white border-black border-4 p-5 shadow-custom">
			<Button to={`/chapter/${chapter.slug}`} customClass="py-2 px-8">
				{"<"} Back
			</Button>

			<div className="w-full h-2 mt-8 bg-black"></div>

			<LessonHeader chapter={chapter} section={section} />
		</div>
	);
}

/* =========================
   TYPING EFFECT
========================= */

function useTyping(text: string, speed = 20) {
	const [displayed, setDisplayed] = useState("");

	useEffect(() => {
		setDisplayed("");
		let i = 0;

		const interval = setInterval(() => {
			i++;
			setDisplayed(text.slice(0, i));
			if (i >= text.length) clearInterval(interval);
		}, speed);

		return () => clearInterval(interval);
	}, [text]);

	return displayed;
}

/* =========================
   DIALOGUE BOX
========================= */

function DialogueBox() {
	const { dialogues } = useGameStore();
	const last = dialogues[dialogues.length - 1];

	const typed = useTyping(last.text);

	return (
		<div className="mt-5 bg-overlay p-5 space-y-3">
			<h1 className="text-2xl capitalize">
				{last.speaker === "boss" ? "Martin Luther" : "You"}
			</h1>

			<div className="bg-black h-1"></div>

			<p>{typed}</p>
		</div>
	);
}

/* =========================
   CHARACTER AREA
========================= */

function CharacterArea() {
	const { currentSpeaker } = useGameStore();

	return (
		<div className="flex justify-between items-end mt-10 px-5">
			<img
				src={Brother}
				alt="Brother"
				className={`h-64 object-contain transition ${
					currentSpeaker === "player" ? "scale-105 opacity-100" : "opacity-50"
				}`}
			/>

			<img
				src={Martin}
				alt="Martin"
				className={`h-48 object-contain transition ${
					currentSpeaker === "boss" ? "scale-105 opacity-100" : "opacity-50"
				}`}
			/>
		</div>
	);
}

/* =========================
   INPUT BAR
========================= */

function InputBar() {
	const { input, setInput, submitAnswer, isThinking } = useGameStore();

	return (
		<div className="bg-white fixed bottom-0 w-full border-4 border-black z-20">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitAnswer();
				}}
				className="inner-game-container flex justify-between py-4 gap-5 max-w-5xl mx-auto"
			>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					disabled={isThinking}
					className="border-black border-4 flex-1 px-4 disabled:opacity-50"
					placeholder={
						isThinking ? "Enemy is thinking..." : "Type your answer..."
					}
				/>

				<Button type="submit" disabled={isThinking} customClass="py-2 px-6">
					Submit
				</Button>
			</form>
		</div>
	);
}

/* =========================
   MAIN
========================= */

export default function BossFight() {
	const { chapterSlug } = useParams();
	const chapter = chapters.find((c) => c.slug === chapterSlug) as IChapter;
	const section: ISection = chapter.sections[chapter.sections.length - 1];

	return (
		<div className="relative w-full h-screen">
			{/* Background */}
			<div
				className="absolute inset-0 bg-cover bg-center"
				style={{ backgroundImage: `url(${BgImg})` }}
			>
				<div className="absolute inset-0 bg-black/50" />
			</div>

			<div className="relative z-10 outer-container pb-40">
				<div className="inner-game-container mt-5">
					<GameHeader chapter={chapter} section={section} />
					<CharacterArea />
					<DialogueBox />
				</div>
			</div>

			<InputBar />
		</div>
	);
}
