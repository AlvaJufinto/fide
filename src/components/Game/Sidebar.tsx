/** @format */

import { NavLink } from "react-router";

import Dashboard from "@/assets/game/dashboard.svg";
import Help from "@/assets/game/help.png";
import Leaderboard from "@/assets/game/leaderboard.svg";
import Level from "@/assets/game/level.png";
import Profile from "@/assets/game/profile.svg";

function Sidebar() {
	const LINKS = [
		{
			name: "Dashboard",
			route: "/dashboard",
			icon: Dashboard,
		},
		{
			name: "Level",
			route: "/level",
			icon: Level,
		},
		{
			name: "Leaderboard",
			route: "/leaderboard",
			icon: Leaderboard,
		},
		{
			name: "Profile",
			route: "/profile",
			icon: Profile,
		},
		{
			name: "Help",
			route: "/help",
			icon: Help,
		},
	];

	return (
		<div className="sticky top-24 flex flex-col gap-5 border-2 w-65 py-8 px-7 shadow-custom">
			{LINKS.map((link, i) => (
				<NavLink
					key={i}
					to={link.route}
					className={({ isActive }) =>
						`flex gap-3 items-center ${
							isActive ? "text-primary" : "text-black"
						}`
					}
				>
					<div className="w-7">
						<img src={link.icon} className="h-7" alt={link.name} />
					</div>
					<p className="text-2xl">{link.name}</p>
				</NavLink>
			))}
		</div>
	);
}

export default Sidebar;
