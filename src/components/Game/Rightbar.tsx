/** @format */

import SacredHeart from '@/assets/game/sacred-heart.svg';

import StreakCalendar from './Streak';

function Leaderboard() {
	return (
		<div className="flex flex-col gap-5 border-2 max-w-full py-4 px-7 shadow-custom">
			<h1 className="text-primary text-3xl font-bold flex flex-col items-center">
				Leaderboard
			</h1>
			<div className="space-y-2">
				<div className="flex gap-1 items-center">
					<div className="w-9 text-2xl font-bold text-center relative">
						<img
							src={SacredHeart}
							className="absolute inset-0 w-9 -top-2.5 object-contain z-0"
							alt="Sacred Heart"
						/>
						<p className="text-white relative z-10">I</p>
					</div>
					<div className="flex-1 text-white font-bold py-1 px-3 bg-primary border-2 border-black">
						S*****s A**a
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<div className="w-9 text-2xl text-black font-bold text-center">
						II
					</div>
					<div className="flex-1 text-white font-bold py-1 px-3 bg-gray border-2 border-black">
						J***n D*e
					</div>
				</div>
				<div className="flex gap-1 items-center">
					<div className="w-9 text-2xl text-black font-bold text-center">
						III
					</div>
					<div className="flex-1 text-black font-bold py-1 px-3 bg-white primary border-2 border-black">
						A*****m
					</div>
				</div>
			</div>
		</div>
	);
}

function Rightbar() {
	return (
		<div className="sticky top-24 space-y-4 max-2-40">
			<StreakCalendar />
			<Leaderboard />
		</div>
	);
}

export default Rightbar;
