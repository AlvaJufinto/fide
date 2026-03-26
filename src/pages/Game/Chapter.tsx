/** @format */

import {
	useEffect,
	useState,
} from 'react';

import {
	Link,
	useParams,
} from 'react-router';

import { api } from '@/api';
import Martin from '@/assets/icon/martin.png';
import FrontGame from '@/components/layout/FrontGame';
import Button from '@/components/ui/Button';
import PageLoading from '@/components/ui/PageLoading';
import type {
	IChapter,
	ISection,
} from '@/interfaces/data';

function Chapter() {
	const { chapterSlug } = useParams();
	const [chapter, setChapter] = useState<IChapter | null>(null);
	const [sections, setSections] = useState<ISection[]>([]);
	const [loading, setLoading] = useState(true);

	const [lessonProgress, setLessonProgress] = useState<any[]>([]);
	const [sectionProgress, setSectionProgress] = useState<any[]>([]);

	// Fetch progress
	useEffect(() => {
		if (!chapterSlug) return;

		api.getProgress().then((res) => {
			if (res) {
				const data = res.data;
				setLessonProgress(data.lessonProgress);
				setSectionProgress(data.sectionProgress);
			}
		});
	}, [chapterSlug]);

	// Fetch chapter
	useEffect(() => {
		if (!chapterSlug) return;

		api
			.getChapterFull(chapterSlug)
			.then((res) => {
				if (res.success && res.data) {
					setChapter(res.data);
					setSections(res.data.sections || []);
				}
			})
			.finally(() => setLoading(false));
	}, [chapterSlug]);

	// Check if lesson completed
	const isLessonCompleted = (lessonId: number) =>
		lessonProgress.some(
			(lp) => lp.lessonId === lessonId && lp.status === "completed",
		);

	// Check if section completed
	const isSectionCompleted = (sectionSlug: string) =>
		sectionProgress.some(
			(sp) => sp.slug === sectionSlug && sp.status === "completed",
		);

	// Section lock
	const isSectionLocked = (sectionIndex: number) => {
		if (sectionIndex === 0) return false;
		const prevSection = sections[sectionIndex - 1];
		return !isSectionCompleted(prevSection.slug);
	};

	// Lesson lock
	const isLessonLocked = (lessonIndex: number, sectionIndex: number) => {
		if (sectionIndex === 0 && lessonIndex === 0) return false;
		const section = sections[sectionIndex];

		if (lessonIndex > 0) {
			const prevLesson = section.lessons?.[lessonIndex - 1];
			return prevLesson ? !isLessonCompleted(prevLesson.id) : false;
		}

		if (sectionIndex > 0) {
			return isSectionLocked(sectionIndex - 1);
		}

		return false;
	};

	// Get current lesson (first unlocked & not completed)
	const getCurrentLesson = () => {
		for (let sIndex = 0; sIndex < sections.length; sIndex++) {
			const section = sections[sIndex];
			if (section.isFinalBoss) continue;
			if (section.lessons)
				for (let lIndex = 0; lIndex < section.lessons.length; lIndex++) {
					const lesson = section.lessons[lIndex];
					if (
						!isLessonCompleted(lesson.id) &&
						!isLessonLocked(lIndex, sIndex)
					) {
						return { sectionIndex: sIndex, lessonIndex: lIndex, lesson };
					}
				}
		}
		return null;
	};

	const currentLesson = getCurrentLesson();

	return (
		<FrontGame>
			<div className="w-full">
				<Button customClass="px-8 py-2" to={`/dashboard`}>
					{"<"} Back
				</Button>

				{loading && <PageLoading isLoading={loading} />}
				{!chapter && !loading && (
					<div className="mt-10 mx-auto">Chapter not found</div>
				)}

				{chapter && !loading && (
					<>
						{/* Chapter Header */}
						<div className="mt-14 flex flex-col items-center gap-4 text-center">
							<div className="py-3 px-10 text-2xl border-4 border-black shadow-custom">
								Chapter {chapter.level}
							</div>
							<p className="text-primary text-5xl uppercase font-bold">
								{chapter.title}
							</p>
							<img
								src={chapter.imageUrl}
								className="shadow-custom max-w-md"
								alt={chapter.title}
							/>
							<p className="text-gray w-[60%] text-sm">{chapter.description}</p>
						</div>

						{/* Sections & Lessons */}
						<div className="mt-16 flex flex-col gap-12">
							{sections.map((section, sIndex) => {
								const lockedSection = isSectionLocked(sIndex);

								return (
									<div
										key={section.slug}
										className={`${lockedSection ? "opacity-50 cursor-not-allowed" : ""}`}
									>
										{/* Section Header */}
										<div
											className={`w-full border-4 border-black shadow-custom flex flex-col py-4 px-10 bg-white relative ${
												lockedSection ? "cursor-not-allowed" : ""
											}`}
										>
											{lockedSection && (
												<div className="absolute top-2 right-2 text-xl text-gray-700">
													🔒
												</div>
											)}

											{section.isFinalBoss ? (
												<div className="w-full flex gap-5">
													<img src={Martin} alt="Final Boss" className="w-25" />
													<div className="flex-1 flex flex-col gap-2 items-start">
														<h1 className="uppercase font-bold text-4xl text-primary">
															Final Boss
														</h1>
														<Button
															to={`/chapter/${chapter.slug}/boss-fight`}
															customClass="py-2 px-8 text-2xl"
															disabled={lockedSection}
														>
															FIGHT
														</Button>
													</div>
												</div>
											) : (
												<>
													<h1 className="text-primary uppercase font-bold text-3xl">
														Section {section.level}
													</h1>
													<p className="text-xl">{section.title}</p>
												</>
											)}
										</div>

										{/* Lessons */}
										{!section.isFinalBoss && (
											<div className="mt-6 flex flex-col relative">
												<div className="absolute left-5 top-0 bottom-0 border-l-8 border-dashed border-gray"></div>

												{section.lessons?.map((lesson, lIndex) => {
													const completed = isLessonCompleted(lesson.id);
													const locked = isLessonLocked(lIndex, sIndex);

													return (
														<div
															key={lesson.slug}
															className="flex items-center mb-8 relative"
														>
															<div className="w-20 flex justify-center relative">
																<div className="absolute left-5 w-10 border-t-8 border-dashed border-gray"></div>
															</div>

															<Link
																to={
																	locked || lockedSection
																		? "#"
																		: `/chapter/${chapter.slug}/${section.slug}/${lesson.slug}`
																}
																className={`group flex flex-1 items-center ${
																	locked || lockedSection
																		? "select-none opacity-50 cursor-not-allowed"
																		: ""
																}`}
															>
																<div
																	className={`group-hover:bg-gray-200 p-4 flex items-center gap-5 border-4  relative
                                  ${completed ? "text-white border-primary" : ""}
                                  ${
																		currentLesson?.lesson.id === lesson.id
																			? "border-yellow-500 bg-yellow-50"
																			: ""
																	}
                                `}
																>
																	<div
																		className={`border-4 border-black text-3xl py-1 px-4 ${
																			completed ? "bg-primary text-white" : ""
																		}`}
																	>
																		{lesson.level}
																	</div>
																	<p className="font-bold text-black text-lg">
																		{lesson.title}
																	</p>
																	{locked && (
																		<span className="ml-2 text-gray-700">
																			🔒
																		</span>
																	)}
																	{currentLesson?.lesson.id === lesson.id && (
																		<div className="absolute z-8 -right-40 flex items-center bg-primary text-white p-2 border-4 border-black font-bold animate-float-pixel">
																			{/* Triangle arrow kiri */}
																			<div className="absolute -left-3 z-8 top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-black  bg"></div>
																			Start Here
																		</div>
																	)}
																</div>
															</Link>
														</div>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</>
				)}
			</div>
		</FrontGame>
	);
}

export default Chapter;
