/** @format */

import Bible from "@/assets/icon/bible.png";
import Earth from "@/assets/icon/earth.png";
import Gospel from "@/assets/icon/gospel.png";
import Pray from "@/assets/icon/pray.png";

import SectionHead from "./SectionHead";

function HowToPlay() {
	const STEPS = [
		{
			image: Earth,
			step: "I",
			title: "Choose Your Chapter",
			description:
				"Pick a chapter you like. Each chapter has its own exciting story!",
		},
		{
			image: Bible,
			step: "II",
			title: "Read the Story",
			description:
				"Read short and easy explanations. There are many interesting things to discover!",
		},
		{
			image: Gospel,
			step: "III",
			title: "Answer the Quiz",
			description:
				"Answer fun questions after learning. Don’t be afraid to make mistakes—everyone learns!",
		},
		{
			image: Pray,
			step: "IV",
			title: "Earn Rewards",
			description:
				"Collect Grace points and level up. The more you learn, the more rewards you earn!",
		},
	];

	return (
		<div className="outer-container mt-30">
			<div className="inner-container">
				<SectionHead
					title="How to Play?"
					description="Follow these fun steps to begin your adventure in Fide!"
				/>
				<div className="mt-16 flex gap-14 justify-center">
					{STEPS.map((step, i) => (
						<div key={i} className="group flex flex-col w-38 h-full">
							<div className="flex flex-col items-center ">
								<img
									src={step.image}
									alt="Img"
									className="transition-none group-hover:-translate-y-1"
								/>
								<p className="my-3 font-bold text-black text-center ">
									{step.step}
								</p>
								<h1 className="text-primary font-bold text-xl text-center	group-hover:tracking-wide">
									{step.title}
								</h1>
							</div>

							<div className="mt-2 flex-1 flex items-center justify-center">
								<p className="text-gray text-xs text-center">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default HowToPlay;
