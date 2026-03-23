/** @format */

import { useState } from "react";

import { useParams } from "react-router";

import Button from "@/components/ui/Button";
import { chapters } from "@/data";
import type {
	IChapter,
	IChoice,
	ILesson,
	IQuestion,
	ISection,
} from "@/interfaces/data";

interface IQuestionProps {
	content: IQuestion;
}

function Question({ content }: IQuestionProps) {
	const [selected, setSelected] = useState<IChoice | null>(null);
	const [isChecked, setIsChecked] = useState(false);

	const isCorrect = selected?.option === content.correctAnswer;

	return (
		<div className="mt-10 flex flex-col items-center">
			<p className="text-3xl text-center">{content.question}</p>

			<div className="mt-5 flex flex-col gap-5 w-full max-w-3xl">
				{content.choices.map((c, i) => {
					const isSelected = selected?.option === c.option;

					return (
						<div
							key={i}
							className={`border-4 flex items-center cursor-pointer p-4  transition-colors ${
								isSelected
									? "bg-primary text-white border-primary"
									: "bg-white text-black border-black"
							}`}
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
					className={`mt-10 w-full max-w-3xl border-4 text-center py-4 px-10  ${
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

interface IContentProps {
	currentContent: ILesson["contents"][number];
}

function Content({ currentContent }: IContentProps) {
	if (!currentContent) return null;

	if (currentContent.type === "material") {
		return (
			<div
				dangerouslySetInnerHTML={{ __html: currentContent.content }}
				className="markdown max-w-3xl text-justify"
			/>
		);
	}

	if (currentContent.type === "question") {
		return <Question content={currentContent} />;
	}

	return null;
}

interface ILessonHeaderProps {
	chapter: IChapter;
	section: ISection;
	lesson: ILesson;
}

function LessonHeader({ chapter, section, lesson }: ILessonHeaderProps) {
	return (
		<div className="w-full  mt-4 flex flex-col items-center p-6">
			<h1 className="text-primary uppercase font-bold text-6xl text-center">
				{chapter.title}
			</h1>
			<h3 className="font-bold text-black text-2xl text-center">
				SECTION {section.level}: {section.title}
			</h3>

			<div className="mt-5 flex gap-5 items-center">
				<div className="border-4 py-4 px-8 text-5xl">{lesson.level}</div>
				<p className="font-bold text-4xl uppercase">{lesson.title}</p>
			</div>
		</div>
	);
}

interface ILessonNavigationProps {
	current: number;
	setCurrent: (val: number) => void;
	lessonLength: number;
	progress: number;
}

function LessonNavigation({
	current,
	setCurrent,
	lessonLength,
	progress,
}: ILessonNavigationProps) {
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
						></div>
					</div>
					<h1 className="text-4xl font-bold">{progress}%</h1>
				</div>

				<Button
					onClick={() => setCurrent(current + 1)}
					disabled={current + 1 >= lessonLength}
					customClass="py-2 px-6"
				>
					Next {">"}
				</Button>
			</div>
		</div>
	);
}

export default function Lesson() {
	const [current, setCurrent] = useState(0);
	const { chapterSlug, sectionSlug, lessonSlug } = useParams();

	const chapter = chapters.find((c) => c.slug === chapterSlug) as IChapter;

	const section = chapter.sections.find(
		(s) => s.slug === sectionSlug,
	) as ISection;

	const lesson = section?.lessons?.find(
		(l) => l.slug === lessonSlug,
	) as ILesson;

	const currentContent = lesson?.contents[current];

	const progress = Math.floor(((current + 1) / lesson.contents.length) * 100);

	return (
		<div className="outer-container pb-40">
			<div className="inner-game-container mt-5">
				<Button to={`/chapter/${chapter.slug}`} customClass="py-2 px-8">
					{"<"} Back
				</Button>

				<LessonHeader chapter={chapter} section={section} lesson={lesson} />

				<div className="mt-4 flex justify-center">
					<Content currentContent={currentContent} />
				</div>
			</div>

			<LessonNavigation
				current={current}
				setCurrent={setCurrent}
				lessonLength={lesson.contents.length}
				progress={progress}
			/>
		</div>
	);
}
