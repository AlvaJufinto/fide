/** @format */

import type { IChapter, ILesson, ISection } from "@/interfaces/data";

interface ILessonHeaderProps {
	chapter: IChapter;
	section: ISection;
	lesson?: ILesson;
}

export default function LessonHeader({
	chapter,
	section,
	lesson,
}: ILessonHeaderProps) {
	return (
		<div className="w-full flex flex-col items-center p-6">
			<h1 className="text-primary uppercase font-bold text-6xl text-center">
				Chapter {chapter.level}: {chapter.title}
			</h1>
			<h3 className="font-bold text-black text-2xl text-center">
				{section.isFinalBoss
					? section.title
					: `SECTION ${section.level}: ${section.title}`}
			</h3>

			<div className="mt-5 flex gap-5 items-center">
				{section.isFinalBoss == true ? (
					<p className="font-bold text-4xl uppercase">Final boss</p>
				) : (
					<>
						<div className="border-4 py-4 px-8 text-5xl">{lesson?.level}</div>
						<p className="font-bold text-4xl uppercase">{lesson?.title}</p>
					</>
				)}
			</div>
		</div>
	);
}
