/** @format */

import FrontGame from "@/components/layout/FrontGame";
import Button from "@/components/ui/Button";
import { chapters } from "@/data";
import type { IChapter } from "@/interfaces/data";

interface ChapterCardProps {
	chapter: IChapter;
}

function ChapterCard({ chapter }: ChapterCardProps) {
	return (
		<div className="max-w-9/10 w-full flex flex-col items-center">
			<img
				className="relative top-6 shadow-custom"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsRIeXT-rY4KLHFB8UKy7c00g-Wo97qsSOsSevQsbsyGSlGLfd1NH2wiZ1MvMtdpwAT5jHeYGUEP40HMsZ8WxdPDWHlL26&s&ec=121584914"
				alt="Picture"
			/>
			<div className="w-full border-2 shadow-custom p-10 flex flex-col items-center justify-center">
				<p className="font-bold text-xl text-center">Chapter {chapter.level}</p>
				<h1 className="text-primary my-4 text-4xl uppercase text-center">
					{chapter.title}
				</h1>
				<Button customClass="px-8 py-2" to={`/chapter/${chapter.slug}`}>
					Learn
				</Button>
			</div>
		</div>
	);
}

function Dashboard() {
	return (
		<FrontGame>
			<div className="w-full flex flex-col items-center">
				{chapters.map((chapter, i, arr) => (
					<>
						<ChapterCard key={i} chapter={chapter} />
						{i + 1 !== arr.length && (
							<div className="border-l-10 border-dashed border-gray h-48"></div>
						)}
					</>
				))}
			</div>
		</FrontGame>
	);
}

export default Dashboard;
