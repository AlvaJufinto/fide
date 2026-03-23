/** @format */

import type { IQuestion } from "@/interfaces/data";
import { useLessonStore } from "@/stores/lessonStore";

import Button from "../ui/Button";

interface IQuestionProps {
	content: IQuestion;
}

export default function Question({ content }: IQuestionProps) {
	const { selected, setSelected, isChecked, setIsChecked } = useLessonStore();

	const isCorrect = selected?.option === content.correctAnswer;

	return (
		<div className="mt-10 flex flex-col items-center">
			<p className="text-3xl text-center">{content.question}</p>

			<div className="mt-5 flex flex-col gap-5 w-full max-w-3xl">
				{content.choices.map((c, i) => {
					const isSelected = selected?.option === c.option;
					const isRight = isCorrect && isSelected && isChecked;
					const isWrong = !isCorrect && isSelected && isChecked;

					return (
						<div
							key={i}
							className={`border-4 flex items-center cursor-pointer p-4 transition-colors
								${isSelected ? "bg-primary text-white border-primary" : "bg-white text-black border-black"}
								${isRight ? "text-success border-success bg-white!" : ""}
								${isWrong ? "text-error border-error bg-white!" : ""}
							`}
							onClick={() => {
								setSelected(c);
								setIsChecked(false);
							}}
						>
							<div className="w-20 uppercase text-4xl font-bold text-center">
								{c.option}.
							</div>
							<p className="flex-1 text-2xl">{c.content}</p>
						</div>
					);
				})}
			</div>

			<Button
				customClass="mt-10 py-2 px-10 text-2xl"
				onClick={() => setIsChecked(true)}
				disabled={!selected}
			>
				Check
			</Button>

			{isChecked && (
				<div
					className={`mt-10 w-full max-w-3xl border-4 text-center py-4 px-10 ${
						isCorrect
							? "border-success text-success"
							: "border-error text-error"
					}`}
				>
					<h1 className="text-2xl font-bold mb-2">Explanation</h1>
					<p className="text-2xl">
						{isCorrect ? content.explanationCorrect : content.explanationWrong}
					</p>
				</div>
			)}
		</div>
	);
}
