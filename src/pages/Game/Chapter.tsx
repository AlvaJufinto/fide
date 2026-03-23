/** @format */

import { Link, useParams } from "react-router";

import Martin from "@/assets/icon/martin.png";
import FrontGame from "@/components/layout/FrontGame";
import Button from "@/components/ui/Button";
import { chapters } from "@/data";
import type { IChapter, ISection } from "@/interfaces/data";

function Chapter() {
	const { chapterSlug } = useParams();

	const chapter: IChapter | undefined = chapters.find(
		(c) => c.slug === chapterSlug,
	);
	console.log("🚀 ~ Chapter ~ chapter:", chapter);

	const sections: ISection[] = chapter?.sections as ISection[];
	console.log("🚀 ~ Chapter ~ sections:", sections);

	return (
		<FrontGame>
			<div className="w-full">
				<Button customClass="px-8 py-2" to={`/dashboard`}>
					{"<"} Back
				</Button>
				<div className="mt-14 flex flex-col items-center gap-4 text-center">
					<div className="py-3 px-10 text-2xl border-4 border-black shadow-custom">
						Chapter {chapter?.level}
					</div>

					<p className="text-primary text-5xl uppercase font-bold">
						{chapter?.title}
					</p>

					<img
						src={chapter?.img}
						className="shadow-custom max-w-md"
						alt={chapter?.title}
					/>

					<p className="text-gray w-[60%] text-sm">{chapter?.description}</p>
				</div>

				<div className="mt-16 flex flex-col gap-12">
					{sections.map((section, i) => (
						<div key={i}>
							{/* SECTION HEADER */}
							<div className="w-full border-4 border-black shadow-custom flex flex-col py-4 px-10 bg-white">
								{section.isFinalBoss ? (
									<div className="w-full flex gap-5">
										<img src={Martin} alt="Final Boss" className="w-25" />
										<div className="flex-1 flex flex-col gap-2">
											<h1 className="uppercase font-bold text-4xl text-primary">
												Final Boss
											</h1>
											<Button customClass="py-2 px-8 text-2xl">FIGHT</Button>
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
									{/* MAIN VERTICAL LINE */}
									<div className="absolute left-5 top-0 bottom-0 border-l-8 border-dashed border-gray"></div>

									{section.lessons?.map((lesson, i) => (
										<div key={i} className="flex items-center mb-8 relative">
											{/* CONNECTOR DOT AREA */}
											<div className="w-20 flex justify-center relative">
												{/* horizontal line */}
												<div className="absolute left-5 w-10 border-t-8 border-dashed border-gray"></div>
											</div>

											{/* CONTENT */}
											<Link
												to={`/chapter/${chapter?.slug}/${section.slug}/${lesson.slug}`}
												className="group flex flex-1 items-center"
											>
												<div className="group-hover:bg-gray-200 p-4 flex items-center gap-5 ">
													<div className="bg-white border-2 text-3xl py-1 px-4">
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
							{/* LESSONS */}
						</div>
					))}
				</div>
			</div>
		</FrontGame>
	);
}

export default Chapter;
