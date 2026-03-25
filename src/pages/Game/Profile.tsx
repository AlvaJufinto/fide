/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { api } from '@/api';
/* ================= IMPORT ICON ================= */
import Level1 from '@/assets/icon/level/cathecumen.png';
import Level3 from '@/assets/icon/level/discipulus.png';
import Level5 from '@/assets/icon/level/doctor.png';
import Level2 from '@/assets/icon/level/fidelis.png';
import Level4 from '@/assets/icon/level/theologus.png';
import FrontGame from '@/components/layout/FrontGame';
import PageLoading from '@/components/ui/PageLoading';
import type { ProfileData } from '@/interfaces/profile';

const LEVEL_META = {
	1: { img: Level1 },
	2: { img: Level2 },
	3: { img: Level3 },
	4: { img: Level4 },
	5: { img: Level5 },
};

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

function Profile() {
	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);

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
				<PageLoading isLoading loadingText="Loading profile..." />
			</FrontGame>
		);
	}

	if (!profile) {
		return (
			<FrontGame>
				<div className="text-center">Failed to load profile</div>
			</FrontGame>
		);
	}

	const { points, level, rank, breakdown, nextRank } = profile;

	const progress = nextRank
		? Math.min((points / nextRank.requiredPoints) * 100, 100)
		: 100;

	return (
		<FrontGame>
			<div className="w-full flex flex-col items-center gap-6">
				{/* HEADER */}
				<div className="border-4 border-black shadow-[6px_6px_0px_black] px-6 py-4 text-center">
					<h1 className="text-3xl font-bold text-primary">PROFILE</h1>
					<p className="text-xs mt-1">FAITH PROGRESSION STATUS</p>
				</div>

				{/* MAIN CARD */}
				<div className="w-full max-w-md border-4 border-black shadow-[4px_4px_0px_black] p-5 flex flex-col gap-4 items-center">
					{/* ICON (REAL ASSET) */}
					<img
						src={LEVEL_META[level as keyof typeof LEVEL_META]?.img}
						className="w-24"
					/>

					{/* USER */}
					<div className="text-xl font-bold">
						USER #{profile.userId.slice(0, 6)}
					</div>

					<div className="text-sm">
						Level {toRoman(level)} • {rank}
					</div>

					{/* XP */}
					<div className="w-full border-2 border-black p-3 flex flex-col gap-2">
						<div className="flex justify-between text-sm font-bold">
							<span>Grace Points (XP)</span>
							<span>{points}</span>
						</div>

						{/* PROGRESS BAR (SEGMENT STYLE BIAR CONSISTENT) */}
						<div className="flex gap-1">
							{Array.from({ length: 20 }).map((_, i) => (
								<div
									key={i}
									className={`w-3 h-4 border border-black ${
										i < Math.round(progress / 5) ? "bg-black" : "bg-white"
									}`}
								/>
							))}
						</div>

						<div className="text-xs text-right">{Math.floor(progress)}%</div>

						{nextRank && (
							<div className="text-xs border-2 border-black px-2 py-1 text-center">
								NEXT: {nextRank.rank} ({nextRank.requiredPoints} XP)
							</div>
						)}
					</div>

					{/* STATS */}
					<div className="w-full border-2 border-black p-3 flex flex-col gap-2 text-sm">
						<div className="font-bold text-center">STATS</div>

						<div className="flex justify-between">
							<span>Correct</span>
							<span>{breakdown.correctAnswers}</span>
						</div>

						<div className="flex justify-between">
							<span>Lessons</span>
							<span>{breakdown.completedLessons}</span>
						</div>

						<div className="flex justify-between">
							<span>Boss</span>
							<span>{breakdown.bossSubmissions}</span>
						</div>
					</div>
				</div>

				{/* FOOTER */}
				<div className="border-4 border-black px-4 py-2 text-xs shadow-[4px_4px_0px_black]">
					STATUS: ACTIVE
				</div>
			</div>
		</FrontGame>
	);
}

export default Profile;
