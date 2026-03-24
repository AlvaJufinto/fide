/** @format */

import Augustine from "@/assets/home/augustine.png";
import AboutUs from "@/components/Home/AboutUs";
import Features from "@/components/Home/Features";
import Footer from "@/components/Home/Footer";
import HowToPlay from "@/components/Home/HowToPlay";
import Levels from "@/components/Home/Levels";
import Navbar from "@/components/Home/Navbar";
import Welcome from "@/components/Home/Welcome";
import Button from "@/components/ui/Button";

export default function Home() {
	return (
		<>
			<Navbar />
			<Welcome />
			<Features />
			<HowToPlay />
			<Levels />
			<div className="mt-36 outer-container">
				<div className="inner-container flex flex-col items-center">
					<img src={Augustine} className="w-50 mb-10" alt="St. Augustine" />
					<h1 className="text-3xl font-bold text-center w-137 max-w-full">
						“You have made us for yourself, O Lord, and our heart is restless
						until it rests in you.”
					</h1>
					<p className="text-2xl text-gray text-center">
						— Augustine of Hippo (Confessions)
					</p>
				</div>
			</div>
			<AboutUs />
			<div className="pt-24 sm:pt-32 lg:pt-36 outer-container" id="play">
				<div className="inner-container flex flex-col items-center">
					<div className="shadow-[4px_4px_0px_var(--color-gray)] animate-float-pixel border-black border-5 w-full max-w-2xl flex flex-col gap-4 justify-center items-center py-8 sm:py-10 px-4 sm:px-6">
						<h1 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold text-center">
							Ready for a New Adventure?
						</h1>

						<p className="font-bold text-sm sm:text-base lg:text-lg text-center max-w-[90%] sm:max-w-[75%]">
							Start an exciting journey with Fide! Learn, play, and become a
							friend of Jesus every day.
						</p>

						<Button
							customClass="py-3 sm:py-4 px-6 sm:px-10 w-full sm:w-auto text-center"
							to="/dashboard"
						>
							Start Your Journey!
						</Button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}
