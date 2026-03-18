/** @format */

import Level1 from "@/assets/icon/level/cathecumen.png";
import Level3 from "@/assets/icon/level/discipulus.png";
import Level5 from "@/assets/icon/level/doctor.png";
import Level2 from "@/assets/icon/level/fidelis.png";
import Level4 from "@/assets/icon/level/theologus.png";

import SectionHead from "./SectionHead";

function Levels() {
	const LEVELS = [
		{
			img: Level1,
			level: "Level I",
			title: "Catechumen",
			description: "The first step to becoming a friend of Jesus",
		},
		{
			img: Level2,
			level: "Level II",
			title: "Fidelis",
			description: "Getting to know and love God more deeply",
		},
		{
			img: Level3,
			level: "Level III",
			title: "Discipulus",
			description: "Learning to become a good disciple of Jesus",
		},
		{
			img: Level4,
			level: "Level IV",
			title: "Theologus",
			description: "Already knowledgeable and enjoys sharing faith stories",
		},
		{
			img: Level5,
			level: "Level V",
			title: "Doctor Ecclesiae",
			description: "A champion of faith, ready to help others",
		},
	];

	return (
		<div className="mt-30 outer-container">
			<div className="inner-container">
				<SectionHead
					title="Exciting Levels in Fide."
					description="Each level has its own challenges and rewards. The higher your level, the more exciting the adventure becomes!"
				/>
				<div className="mt-16 flex flex-col gap-12 items-center">
					{LEVELS.map((level, i) => (
						<div
							key={i}
							className="group flex gap-7 items-center w-full max-w-125 "
						>
							<div
								className="border-black border-4 h-30 w-30 grid place-items-center shadow-[4px_4px_0px_var(--color-gray)]
								transition-none
								group-hover:-translate-x-1 hover:-translate-y-1
								group-hover:shadow-[6px_6px_0px_var(--color-gray)]  
								active:translate-x-1 active:translate-y-1"
							>
								<img src={level.img} alt="Level Img" />
							</div>
							<div className="flex-1">
								<h3 className="font-bold text-xl text-black">{level.level}</h3>
								<h1 className="text-2xl font-bold text-primary">
									{level.title}
								</h1>
								<p className="text-gray">{level.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Levels;
