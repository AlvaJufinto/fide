/** @format */

import {
	useEffect,
	useRef,
	useState,
} from 'react';

import { api } from '@/api';
import type { ISection } from '@/interfaces/data';
import type { ChatMessage } from '@/interfaces/debate';

type LLMJudgeResult = {
	score: number;
	feedback: string;
};

export async function judgeDebateAnswer(
	question: string,
	answer: string,
): Promise<LLMJudgeResult> {
	try {
		const res = await fetch("https://ai.sumopod.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_LLM_KEY}`,
			},
			body: JSON.stringify({
				model: "seed-2-0-mini-free",
				messages: [
					{
						role: "system",
						content: `You are a strict debate judge evaluating a student's answer.
The debate question/point is: "${question}"
The student answered: "${answer}"

Respond ONLY in JSON:
{"score": <0-20>, "feedback": "<short feedback no longer than 60 words>"}`,
					},
					{ role: "user", content: answer },
				],
				max_tokens: 100,
				temperature: 0.3,
			}),
		});

		const data = await res.json();
		const raw = data.choices?.[0]?.message?.content || "{}";

		try {
			const parsed = JSON.parse(raw);
			return {
				score: Math.min(20, Math.max(0, parsed.score ?? 10)),
				feedback: parsed.feedback ?? "Keep going!",
			};
		} catch {
			return { score: 10, feedback: raw };
		}
	} catch {
		return { score: 0, feedback: "Judge error." };
	}
}

export default function useDebateGame(bossSection: ISection | null) {
	const maxQuestions = 5;

	const currentIndexRef = useRef(0);
	const questionsRef = useRef<string[]>([]);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [playerAnswer, setPlayerAnswer] = useState("");
	const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
	const [isThinking, setIsThinking] = useState(false);
	const [score, setScore] = useState(0);
	const [finished, setFinished] = useState(false);
	const [result, setResult] = useState<"win" | "lose" | null>(null);

	// init
	useEffect(() => {
		const qs = bossSection?.boss?.expectedPoints.slice(0, maxQuestions) ?? [];
		console.log("🚀 ~ useDebateGame ~ bossSection?.boss:", bossSection?.boss);
		questionsRef.current = qs;

		if (qs.length > 0) {
			setChatLog([{ from: "boss", text: qs[0] }]);
		}
	}, [bossSection]);

	// RESULT TRIGGER (IMPORTANT)
	useEffect(() => {
		if (!finished) return;

		if (score >= 70) {
			setResult("win");

			if (bossSection?.boss?.id) {
				api.completeBoss({
					slug: bossSection.boss.slug,
					isCompleted: true,
				});
			}
		} else {
			setResult("lose");
		}
	}, [finished, score, bossSection]);

	const submitAnswer = async () => {
		const questions = questionsRef.current;
		const idx = currentIndexRef.current;
		const currentQuestion = questions[idx];

		if (!playerAnswer.trim() || !currentQuestion || isThinking) return;

		const answer = playerAnswer;

		setPlayerAnswer("");
		setIsThinking(true);

		setChatLog((prev) => [...prev, { from: "player", text: answer }]);

		try {
			const { score: parsedScore, feedback } = await judgeDebateAnswer(
				currentQuestion,
				answer,
			);

			setScore((prev) => Math.min(prev + parsedScore, 100));

			setChatLog((prev) => [
				...prev,
				{ from: "feedback", text: `⚖️ ${feedback} (+${parsedScore})` },
			]);

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
						{ from: "boss", text: "The debate is over." },
					]);

					setFinished(true);
				}

				setIsThinking(false);
			}, 800);
		} catch {
			setChatLog((prev) => [
				...prev,
				{ from: "feedback", text: "Judge error." },
			]);

			setIsThinking(false);
		}
	};

	const resetGame = () => {
		currentIndexRef.current = 0;
		setCurrentIndex(0);
		setScore(0);
		setFinished(false);
		setResult(null);
		setChatLog([{ from: "boss", text: questionsRef.current[0] }]);
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
		result,
		resetGame,
	};
}
