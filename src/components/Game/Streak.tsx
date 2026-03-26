/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { api } from '@/api';
import SacredHeart from '@/assets/game/sacred-heart.svg';

function getLocalDateString(date: Date) {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function generateStreakDates(lastDate: string, streak: number) {
	const dates: string[] = [];
	const base = new Date(lastDate + "T00:00:00");

	for (let i = 0; i < streak; i++) {
		const d = new Date(base);
		d.setDate(base.getDate() - i);
		dates.push(getLocalDateString(d));
	}

	return dates;
}

export default function StreakCalendar() {
	const [streakDates, setStreakDates] = useState<string[]>([]);
	const [todayStr, setTodayStr] = useState("");
	const [currentStreak, setCurrentStreak] = useState(0);
	const [maxStreak, setMaxStreak] = useState(0);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const today = new Date();
		setTodayStr(getLocalDateString(today));

		api.getStreaks().then((res) => {
			const data = res.data;
			if (!data) return;

			const { currentStreak, maxStreak, lastActivityDate, isStreakActive } =
				data;
			console.log("🚀 ~ StreakCalendar ~ data:", data);

			setCurrentStreak(currentStreak);
			setMaxStreak(maxStreak);
			setIsActive(isStreakActive);

			if (!isStreakActive) {
				setStreakDates([]);
				return;
			}

			setStreakDates(generateStreakDates(lastActivityDate, currentStreak));
		});
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

	const weekDays = ["M", "T", "W", "T", "F", "S", "S"];

	return (
		<div className="flex flex-col gap-6 border-2 shadow-custom max-w-75 p-4 shadow-lg bg-white">
			{/* Header */}
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-bold text-primary">Streak</h1>

				<span
					className={`text-xs px-2 py-1 font-semibold ${
						isActive ? "bg-green-100 text-success" : "bg-red-100 text-red-500"
					}`}
				>
					{isActive ? "Active" : "Broken"}
				</span>
			</div>

			{/* Stats */}
			<div className="flex justify-between text-sm">
				<div>
					<div className="text-gray-500">Current</div>
					<span className="ml-4 text-lg font-bold text-white flex gap-2 items-center relative">
						<img
							src={SacredHeart}
							className="w-8 absolute -top-2 -left-3"
							alt="Sacred Heart"
						/>{" "}
						<p className="z-3">{currentStreak}</p>
					</span>
				</div>

				<div className="text-right">
					<div className="text-gray-500">Max</div>
					<div className="text-lg font-bold">🏆 {maxStreak}</div>
				</div>
			</div>

			{/* Week Labels */}
			<div className="grid grid-cols-7 text-xs text-gray-400 text-center">
				{weekDays.map((d, i) => (
					<div key={i}>{d}</div>
				))}
			</div>

			{/* Calendar */}
			<div className="grid grid-cols-7">
				{days.map((day) => {
					const dayStr = getLocalDateString(day);
					const isStreak = streakDates.includes(dayStr);
					const isToday = dayStr === todayStr;

					return (
						<div
							key={dayStr}
							className={`relative size-8 flex items-center justify-center rounded-lg  text-sm font-semibold text-gray-700 ${isToday ? "animate-float-pixel" : ""} ${isToday && !isStreak ? "bg-gray-100 " : ""}`}
						>
							{/* Streak Overlay */}
							{isStreak && (
								<img
									src={SacredHeart}
									alt="streak"
									className="absolute -top-2 left-0 w-10 pointer-events-none"
								/>
							)}

							{/* Number */}
							<span
								className={`z-10 ${isToday && isStreak ? "text-white" : ""}`}
							>
								{day.getDate()}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}
