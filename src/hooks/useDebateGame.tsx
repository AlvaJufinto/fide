/** @format */

import { useEffect, useRef, useState } from "react";

import type { ISection } from "@/interfaces/data";
import type { ChatMessage } from "@/interfaces/debate";

export default function useDebateGame(bossSection: ISection | null) {
	const maxQuestions = 5;
	const currentIndexRef = useRef(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [playerAnswer, setPlayerAnswer] = useState("");
	const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
	const [isThinking, setIsThinking] = useState(false);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);

	const questionsRef = useRef<string[]>([]);

	useEffect(() => {
		const qs = bossSection?.boss?.expectedPoints.slice(0, maxQuestions) ?? [];
		questionsRef.current = qs;
		if (qs.length > 0) {
			setChatLog([{ from: "boss", text: qs[0] }]);
		}
	}, [bossSection]);

	const submitAnswer = async () => {
		const questions = questionsRef.current;
		const idx = currentIndexRef.current;
		const currentQuestion = questions[idx];

		if (!playerAnswer.trim() || !currentQuestion || isThinking) return;

		const answer = playerAnswer;
		setPlayerAnswer("");
		setIsThinking(true);

		// Append player message immediately
		setChatLog((prev) => [...prev, { from: "player", text: answer }]);

		try {
			const res = await fetch("https://ai.sumopod.com/v1/chat/completions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${import.meta.env.VITE_LLM_KEY}`,
				},
				body: JSON.stringify({
					model: "seed-2-0-mini-free",
					// FIX 1: Ask AI to score 0-20 AND give feedback, structured response
					messages: [
						{
							role: "system",
							content: `You are a strict debate judge evaluating a student's answer.
The debate question/point is: "${currentQuestion}"
The student answered: "${answer}"

Respond ONLY in this exact JSON format (no markdown, no extra text):
{"score": <integer 0-20>, "feedback": "<1-2 sentence feedback>"}

Score 0-20 based on relevance, accuracy, and argumentation quality.`,
						},
						{ role: "user", content: answer },
					],
					max_tokens: 150,
					temperature: 0.3,
				}),
			});

			const data = await res.json();
			const raw = data.choices?.[0]?.message?.content || "{}";

			let parsedScore = 10;
			let feedback = "Keep going!";
			try {
				const parsed = JSON.parse(raw);
				parsedScore = Math.min(20, Math.max(0, parsed.score ?? 10));
				feedback = parsed.feedback ?? feedback;
			} catch {
				// fallback if AI didn't follow format
				feedback = raw;
			}

			// FIX 5: clamp total score to 100
			setScore((prev) => Math.min(prev + parsedScore, 100));
			setChatLog((prev) => [
				...prev,
				{ from: "feedback", text: `⚖️ ${feedback} (+${parsedScore} pts)` },
			]);

			// FIX 2: use ref to get correct next index, no stale closure
			const nextIndex = idx + 1;
			currentIndexRef.current = nextIndex;
			setCurrentIndex(nextIndex);

			setTimeout(() => {
				if (nextIndex < questions.length) {
					setChatLog((prev) => [
						...prev,
						{ from: "boss", text: questions[nextIndex] },
					]);
				} else {
					setChatLog((prev) => [
						...prev,
						{
							from: "boss",
							text: "The debate is over. You've made your case.",
						},
					]);
					setFinished(true);
				}
				setIsThinking(false);
			}, 800);
		} catch (err) {
			console.error(err);
			setChatLog((prev) => [
				...prev,
				{ from: "feedback", text: "The judge couldn't respond. Try again." },
			]);
			setIsThinking(false);
		}
	};

	return {
		currentQuestion: questionsRef.current[currentIndex],
		playerAnswer,
		setPlayerAnswer,
		submitAnswer,
		chatLog,
		isThinking,
		currentIndex,
		maxQuestions,
		score,
		finished,
	};
}
