/** @format */

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router";

import { api } from "@/api";
import Martin from "@/assets/icon/martin.png";
import FrontGame from "@/components/layout/FrontGame";
import Button from "@/components/ui/Button";
import PageLoading from "@/components/ui/PageLoading";
import type { IChapter, ISection } from "@/interfaces/data";

function Chapter() {
	const { chapterSlug } = useParams();
	const [chapter, setChapter] = useState<IChapter | null>(null);
	const [sections, setSections] = useState<ISection[]>([]);
	const [loading, setLoading] = useState(true);

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

						<div className="mt-16 flex flex-col gap-12">
							{sections.map((section) => (
								<div key={section.slug}>
									<div className="w-full border-4 border-black shadow-custom flex flex-col py-4 px-10 bg-white">
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

									{!section.isFinalBoss && (
										<div className="mt-6 flex flex-col relative">
											<div className="absolute left-5 top-0 bottom-0 border-l-8 border-dashed border-gray"></div>

											{section.lessons?.map((lesson) => (
												<div
													key={lesson.slug}
													className="flex items-center mb-8 relative"
												>
													<div className="w-20 flex justify-center relative">
														<div className="absolute left-5 w-10 border-t-8 border-dashed border-gray"></div>
													</div>

													<Link
														to={`/chapter/${chapter.slug}/${section.slug}/${lesson.slug}`}
														className="group flex flex-1 items-center"
													>
														<div className="group-hover:bg-gray-200 p-4 flex items-center gap-5 ">
															<div className="bg-white border-4 text-3xl py-1 px-4">
																{lesson.level}
															</div>
															<p className="font-bold text-black text-lg">
																{lesson.title}
															</p>
														</div>
													</Link>
												</div>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</FrontGame>
	);
}

export default Chapter;
