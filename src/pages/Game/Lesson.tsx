/** @format */

import { useParams } from "react-router";

import LessonNavigation from "@/components/Game/LessonNavigation";
import Question from "@/components/Game/Question";
import Button from "@/components/ui/Button";
import { chapters } from "@/data";
import type { IChapter, ILesson, ISection } from "@/interfaces/data";
import { useLessonStore } from "@/stores/lessonStore";

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

export default function Lesson() {
	const { chapterSlug, sectionSlug, lessonSlug } = useParams();
	const { current, selected } = useLessonStore();

	const chapter = chapters.find((c) => c.slug === chapterSlug) as IChapter;
	const section = chapter.sections.find(
		(s) => s.slug === sectionSlug,
	) as ISection;
	const lesson = section?.lessons?.find(
		(l) => l.slug === lessonSlug,
	) as ILesson;

	const currentContent = lesson?.contents[current];
	const progress = Math.floor(((current + 1) / lesson.contents.length) * 100);
	const isCurrentCorrect =
		currentContent?.type === "question"
			? selected?.option === currentContent.correctAnswer
			: true;

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
				lessonLength={lesson.contents.length}
				progress={progress}
				currentContentType={currentContent?.type ?? "material"}
				isCurrentCorrect={isCurrentCorrect}
			/>
		</div>
	);
}
