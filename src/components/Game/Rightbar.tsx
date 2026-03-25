/** @format */

import {
	useEffect,
	useState,
} from 'react';

import SacredHeart from '@/assets/game/sacred-heart.svg';

function getLocalDateString(date: Date) {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function StreakCalendar() {
	const [streakDates, setStreakDates] = useState<string[]>([]);
	const [todayStr, setTodayStr] = useState("");

	useEffect(() => {
		const today = new Date();
		const todayString = getLocalDateString(today);
		setTodayStr(todayString);

		// ambil streak dari localStorage
		const storedStreak = JSON.parse(
			localStorage.getItem("streakDates") || "[]",
		);

		// cek kalau hari ini belum masuk streak
		if (!storedStreak.includes(todayString)) {
			storedStreak.push(todayString);
			localStorage.setItem("streakDates", JSON.stringify(storedStreak));
		}

		setStreakDates(storedStreak);
	}, []);

	const getDaysInMonth = (year: number, month: number) => {
		const date = new Date(year, month, 1);
		const days = [];
		while (date.getMonth() === month) {
			days.push(new Date(date));
			date.setDate(date.getDate() + 1);
		}
		return days;
	};

	const today = new Date();
	const days = getDaysInMonth(today.getFullYear(), today.getMonth());

	return (
		<div className="flex flex-col gap-5 border-2 max-w-full py-4 px-7 shadow-custom">
			<h1 className="text-primary text-2xl font-bold text-center">Streak</h1>
			<div className="grid grid-cols-7 gap-2">
				{days.map((day) => {
					const dayStr = getLocalDateString(day);
					const isStreak = streakDates.includes(dayStr);
					const isToday = dayStr === todayStr;

					const bgColor = isToday
						? "bg-gray-400"
						: isStreak
							? "bg-primary"
							: "bg-white";

					return (
						<div
							key={dayStr}
							className={`size-6 flex items-center justify-center border ${bgColor} text-black`}
						>
							{day.getDate()}
						</div>
					);
				})}
			</div>
		</div>
	);
}

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
