/** @format */

import Earth from "@/assets/icon/earth.png";
import Gospel from "@/assets/icon/gospel.png";
import Hat from "@/assets/icon/hat.png";
import Maria from "@/assets/icon/maria.png";
import Martin from "@/assets/icon/martin.png";
import Saint from "@/assets/icon/saint.png";

import SectionHead from "./SectionHead";

function Features() {
	const FEATURES = [
		{
			image: Maria,
			title: "Make Learning More Easier.",
			description:
				"Read a short explanation about the Catholic faith using simple words.",
		},
		{
			image: Earth,
			title: "Exciting Chapters.",
			description:
				"Explore fun chapters, each with its own story and challenges!",
		},
		{
			image: Saint,
			title: "Collect Grace Points",
			description:
				"Answer questions correctly to earn Grace points. Try to collect as many as you can!",
		},
		{
			image: Martin,
			title: "Fight the Boss!",
			description:
				"After learning, test yourself with a boss challenge. Are you ready to win?",
		},
		{
			image: Hat,
			title: "Level Up.",
			description:
				"The more you learn, the higher your level becomes. Start as a beginner and grow into a faith champion.",
		},
		{
			image: Gospel,
			title: "Fun Quizzes.",
			description:
				"After each lesson, there's a fun quiz to test your knowledge.",
		},
	];

	return (
		<div className="pt-28 outer-container" id="features">
			<div className="inner-container">
				<SectionHead
					title="Fun Features in Fide"
					description="Everything is designed so you can learn the Catholic faith in a joyful and engaging way without feeling bored."
				/>

				{/* GRID */}
				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 gap-y-16 md:gap-y-20">
					{" "}
					{FEATURES.map((features, i) => (
						<div
							className="group relative border-5 border-black min-h-48 pt-10 sm:pt-8 px-6 sm:px-10 pb-4
							shadow-[4px_4px_0px_var(--color-gray)]
							transition-none
							hover:-translate-x-1 hover:-translate-y-1
							hover:shadow-[6px_6px_0px_var(--color-gray)]"
							key={i}
						>
							<img
								src={features.image}
								className="absolute top-[-15%] left-[-5%] sm:top-[-20%] sm:left-[-10%] w-12 sm:w-auto
								transition-none
								group-hover:translate-y-1"
								alt="icon"
							/>

							<h3 className="text-primary font-bold text-lg sm:text-xl">
								{features.title}
							</h3>

							<p className="text-gray font-bold text-sm sm:text-base">
								{features.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
