/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { api } from '@/api';
import Level1 from '@/assets/icon/level/cathecumen.png';
import Level3 from '@/assets/icon/level/discipulus.png';
import Level5 from '@/assets/icon/level/doctor.png';
import Level2 from '@/assets/icon/level/fidelis.png';
import Level4 from '@/assets/icon/level/theologus.png';
import FrontGame from '@/components/layout/FrontGame';
import PageLoading from '@/components/ui/PageLoading';

const LEVEL_META = {
	1: { img: Level1 },
	2: { img: Level2 },
	3: { img: Level3 },
	4: { img: Level4 },
	5: { img: Level5 },
};

const LEVEL_LIST = [
	{ level: 1, rank: "Catechumen", min: 0 },
	{ level: 2, rank: "Fidelis", min: 200 },
	{ level: 3, rank: "Discipulis", min: 500 },
	{ level: 4, rank: "Theologus", min: 900 },
	{ level: 5, rank: "Doctor Ecclesiae", min: 1400 },
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
function Level() {
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState<any>(null);

	useEffect(() => {
		api
			.getProfile()
			.then((res) => {
				if (res.success && res.data) setProfile(res.data);
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<FrontGame>
				<PageLoading isLoading={true} loadingText="Loading rank..." />
			</FrontGame>
		);
	}

	if (!profile) return <FrontGame>Failed to load profile</FrontGame>;

	const { points, level, rank, nextRank } = profile;

	const currentMin = LEVEL_LIST.find((l) => l.level === level)?.min ?? 0;

	const progress = nextRank
		? Math.floor(
				((points - currentMin) / (nextRank.requiredPoints - currentMin)) * 100,
			)
		: 100;

	const segments = 20;
	const filledSegments = Math.round((progress / 100) * segments);

	return (
		<FrontGame>
			<div className="w-full flex flex-col items-center">
				<div className="border-4 border-black p-6 shadow-[6px_6px_0px_black] w-full max-w-xl flex flex-col items-center text-center relative">
					{/* BADGE */}
					<div className="absolute -top-3 bg-black text-white px-3 text-xs font-bold">
						CURRENT RANK
					</div>

					<img
						src={LEVEL_META[level as keyof typeof LEVEL_META]?.img}
						className="w-28 mb-3"
					/>

					<h2 className="font-bold text-xl">LEVEL {toRoman(level)}</h2>

					<h1 className="text-3xl text-primary font-bold">{rank}</h1>

					<p className="mt-2 text-sm">{points} XP</p>

					<div className="flex gap-1 mt-4">
						{Array.from({ length: segments }).map((_, i) => (
							<div
								key={i}
								className={`w-3 h-5 border-2 border-black ${
									i < filledSegments ? "bg-yellow" : "bg-white"
								}`}
							/>
						))}
					</div>

					<p className="text-xs mt-2">{progress}%</p>

					{nextRank && (
						<div className="mt-3 border-2 border-black px-3 py-1 text-xs">
							NEXT: {nextRank.rank} ({nextRank.requiredPoints} XP)
						</div>
					)}
				</div>

				<div className="mt-10 flex flex-col items-center w-full max-w-xl">
					{LEVEL_LIST.map((lvl, i, arr) => {
						const isUnlocked = level >= lvl.level;
						const isCurrent = level === lvl.level;

						return (
							<div key={i} className="flex flex-col items-center">
								<div
									className={`flex gap-6 items-center border-4 border-black p-4 shadow-[4px_4px_0px_black] w-full
									${isCurrent ? "shadow-[6px_6px_0px_black] -translate-x-1 -translate-y-1 animate-float-pixel" : ""}
									${!isUnlocked ? "opacity-40" : ""}
									`}
								>
									<div className="border-4 border-black w-20 h-20 flex items-center justify-center">
										<img
											src={
												LEVEL_META[lvl.level as keyof typeof LEVEL_META]?.img
											}
											className="w-12"
										/>
									</div>

									<div className="flex-1">
										<h3 className="font-bold text-sm">
											LEVEL {toRoman(lvl.level)}
										</h3>
										<h1 className="text-xl font-bold text-primary">
											{lvl.rank}
										</h1>
										<p className="text-xs">{lvl.min} XP required</p>
									</div>

									<div className="text-xs font-bold">
										{isCurrent ? "CURRENT" : isUnlocked ? "DONE" : "LOCKED"}
									</div>
								</div>

								{/* CONNECTOR */}
								{i + 1 !== arr.length && (
									<div className="h-16 border-4 border-dashed"></div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</FrontGame>
	);
}

export default Level;
