/** @format */

import { useParams } from "react-router";

import LessonHeader from "@/components/Game/LessonHeader";
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
