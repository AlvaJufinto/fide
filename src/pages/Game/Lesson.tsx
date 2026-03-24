/** @format */

import { useEffect, useState } from "react";

import { useParams } from "react-router";

import { api } from "@/api"; // path ke api
import LessonHeader from "@/components/Game/LessonHeader";
import LessonNavigation from "@/components/Game/LessonNavigation";
import Question from "@/components/Game/Question";
import Button from "@/components/ui/Button";
import PageLoading from "@/components/ui/PageLoading";
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

	const [lesson, setLesson] = useState<ILesson | null>(null);
	const [section, setSection] = useState<ISection | null>(null);
	const [chapter, setChapter] = useState<IChapter | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!chapterSlug || !sectionSlug || !lessonSlug) return;

		setLoading(true);

		const fetchData = async () => {
			try {
				const [chapterRes, sectionRes, lessonRes] = await Promise.all([
					api.getChapter(chapterSlug),
					api.getSection(sectionSlug),
					api.getLessonFull(lessonSlug),
				]);

				if (chapterRes.success && chapterRes.data)
					setChapter(chapterRes.data as IChapter);
				if (sectionRes.success && sectionRes.data)
					setSection(sectionRes.data as ISection);
				if (lessonRes.success && lessonRes.data)
					setLesson(lessonRes.data as ILesson);
			} catch (err) {
				console.error("Failed to fetch lesson data:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [chapterSlug, sectionSlug, lessonSlug]);

	const notFound = !loading && (!chapter || !section || !lesson);
	if (notFound) return <div>Lesson not found</div>;

	const currentContent = lesson?.contents[current];
	// @ts-ignore
	const progress = Math.floor(((current + 1) / lesson?.contents?.length) * 100);
	const isCurrentCorrect =
		currentContent?.type === "question"
			? selected?.optionKey === currentContent.correctAnswer
			: true;

	return (
		<div className="outer-container pb-40">
			<div className="inner-game-container mt-5">
				<Button to={`/chapter/${chapterSlug}`} customClass="py-2 px-8">
					{"<"} Back
				</Button>
				{loading && <PageLoading isLoading={loading} />}
				{!notFound && !loading && (
					<>
						{!(!chapter || !section || !lesson) && (
							<LessonHeader
								chapter={chapter}
								section={section}
								lesson={lesson}
							/>
						)}

						<div className="mt-4 flex justify-center">
							{currentContent && <Content currentContent={currentContent} />}
						</div>
					</>
				)}
			</div>
			{lesson && !notFound && !loading && (
				<LessonNavigation
					lessonLength={lesson.contents.length}
					progress={progress}
					currentContentType={currentContent?.type ?? "material"}
					isCurrentCorrect={isCurrentCorrect}
				/>
			)}
		</div>
	);
}
