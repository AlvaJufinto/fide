/** @format */

import Vatican from "@/assets/home/vatican.png";
import ArrowDown from "@/assets/icon/arrow-down.svg";
import Button from "@/components/ui/Button";

function Welcome() {
	return (
		<div className="outer-container">
			<div className="inner-container flex flex-col items-center">
				<img src={Vatican} alt="Vatican" />
				<h1 className="mt-8 text-5xl font-bold text-primary">
					Welcome to Fide!
				</h1>
				<p className="mt-2 text-gray text-xl max-w-72 text-center font-bold">
					Learning the Catholic faith becomes fun, easy, and full of adventure.
					Start your journey with new friends!
				</p>
				<Button customClass="mt-8 py-4 px-10">Start Your Journey</Button>
				<div className="my-14 flex gap-21">
					<div className="flex flex-col items-center">
						<h2 className="text-primary text-4xl font-bold">400+</h2>
						<p>Courses</p>
					</div>
					<div className="flex flex-col items-center">
						<h2 className="text-primary text-4xl font-bold">40+</h2>
						<p>Stages</p>
					</div>
					<div className="flex flex-col items-center">
						<h2 className="text-primary text-4xl font-bold">10+</h2>
						<p>Chapters</p>
					</div>
				</div>
				<img
					src={ArrowDown}
					className="mb-14 animate-float-pixel"
					alt="arrow-down"
				/>
			</div>
		</div>
	);
}

export default Welcome;
