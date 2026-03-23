/** @format */

import { useLessonStore } from "@/stores/lessonStore";

import Button from "../ui/Button";

interface ILessonNavigationProps {
	lessonLength: number;
	progress: number;
	currentContentType: string;
	isCurrentCorrect?: boolean;
}

export default function LessonNavigation({
	lessonLength,
	progress,
	currentContentType,
	isCurrentCorrect = true,
}: ILessonNavigationProps) {
	const { current, setCurrent, isChecked } = useLessonStore();

	const canNext =
		current + 1 < lessonLength &&
		(currentContentType === "question" ? isCurrentCorrect : true) &&
		isChecked;

	return (
		<div className="bg-white fixed bottom-0 w-full border-4 border-black">
			<div className="inner-game-container flex justify-between py-4 gap-5 max-w-5xl mx-auto">
				<Button
					onClick={() => setCurrent(current - 1)}
					customClass="py-2 px-6"
					disabled={current === 0}
				>
					{"<"} Previous
				</Button>

				<div className="flex gap-5 flex-1 items-center">
					<div className="border-4 flex-1 h-6 overflow-hidden">
						<div
							className="h-full bg-primary transition-all"
							style={{ width: `${progress}%` }}
						/>
					</div>
					<h1 className="text-4xl font-bold">{progress}%</h1>
				</div>

				<Button
					onClick={() => setCurrent(current + 1)}
					disabled={!canNext}
					customClass="py-2 px-6"
				>
					Next {">"}
				</Button>
			</div>
		</div>
	);
}
