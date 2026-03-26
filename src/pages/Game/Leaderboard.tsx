/** @format */

import { useMemo } from 'react';

import SacredHeart from '@/assets/icon/sacred-heart.png';
import FrontGame from '@/components/layout/FrontGame';

const LEADERBOARD_DATA = [
	{ rank: 1, name: "S*****s A**a", points: 2450 },
	{ rank: 2, name: "J***n D*e", points: 2100 },
	{ rank: 3, name: "A*****m", points: 1980 },
	{ rank: 4, name: "M***a", points: 1750 },
	{ rank: 5, name: "L***e", points: 1600 },
	{ rank: 6, name: "D***l", points: 1500 },
	{ rank: 7, name: "R***n", points: 1400 },
	{ rank: 8, name: "T***y", points: 1300 },
	{ rank: 9, name: "C***s", points: 1200 },
	{ rank: 10, name: "YOU", points: 1100, isCurrentUser: true },
];

const toRoman = (num: number) => {
	const roman = [
		["M", 1000],
		["CM", 900],
		["D", 500],
		["CD", 400],
		["C", 100],
		["XC", 90],
		["L", 50],
		["XL", 40],
		["X", 10],
		["IX", 9],
		["V", 5],
		["IV", 4],
		["I", 1],
	];

	let result = "";
	for (const [letter, value] of roman) {
		while (num >= Number(value)) {
			result += letter;
			num -= Number(value);
		}
	}
	return result;
};

const getRowStyle = (player: any) => {
	if (player.isCurrentUser) {
		return "bg-black text-white animate-float-pixel";
	}
	if (player.rank === 1) return "bg-primary text-white  animate-float-pixel";
	if (player.rank === 2) return "bg-gray text-white";
	if (player.rank === 3) return "bg-white text-black";
	return "bg-white text-black";
};

function Leaderboard() {
	const maxPoints = useMemo(
		() => Math.max(...LEADERBOARD_DATA.map((p) => p.points)),
		[],
	);

	return (
		<FrontGame>
			<div className="w-full flex flex-col items-center">
				{/* HEADER */}
				<div className="border-4 border-black shadow-custom px-6 py-4 text-center">
					<h1 className="text-3xl font-bold text-primary">LEADERBOARD</h1>
					<p className="text-xs mt-1">TOP FAITH DEFENDERS</p>
				</div>

				{/* BOARD */}
				<div className="mt-6 w-full max-w-md border-4 border-black shadow-custom p-4">
					<div className="flex flex-col gap-3 pr-1">
						{LEADERBOARD_DATA.map((player, index) => {
							const progress = (player.points / maxPoints) * 100;

							return (
								<div
									key={index}
									className={`
										group flex flex-col gap-1 border-2 border-black px-3 py-2 font-bold
										transition-all duration-200
										hover:scale-[1.02] hover:shadow-custom
										${getRowStyle(player)}
									`}
								>
									<div className="flex items-center gap-2">
										{/* RANK */}
										<div className="w-10 text-center text-lg relative">
											{player.rank === 1 && (
												<img
													src={SacredHeart}
													className="absolute inset-0 w-10 -top-4 object-contain z-0"
												/>
											)}
											<span className="relative z-4">
												{toRoman(player.rank)}
											</span>
										</div>

										{/* NAME */}
										<div className="flex-1 flex items-center gap-2">
											<span>{player.name}</span>
										</div>

										{/* POINTS */}
										<div className="text-xs border-l-2 border-black pl-2">
											{player.points} XP
										</div>
									</div>

									{/* PROGRESS BAR */}
									<div className="w-full h-2 border border-black bg-white">
										<div
											className={`h-full ${player.isCurrentUser ? "bg-primary" : "bg-black"} transition-all duration-500`}
											style={{ width: `${progress}%` }}
										/>
									</div>

									{player.isCurrentUser && (
										<div className="text-[10px] text-yellow-300">YOU</div>
									)}
								</div>
							);
						})}
					</div>
				</div>

				{/* FOOTER */}
				<div className="mt-6 border-4 border-black px-4 py-2 text-xs shadow-custom">
					SYSTEM STATUS: RANKING ACTIVE
				</div>
			</div>
		</FrontGame>
	);
}

export default Leaderboard;
