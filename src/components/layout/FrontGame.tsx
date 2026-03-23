/** @format */

import type { ReactNode } from "react";

import Navbar from "../Game/Navbar";
import Rightbar from "../Game/Rightbar";
import Sidebar from "../Game/Sidebar";

interface IFrontGame {
	children: ReactNode;
}

export default function FrontGame({ children }: IFrontGame) {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Navbar */}
			<Navbar />

			{/* Main Layout */}
			<div className="outer-container mx-auto">
				<div className="flex gap-6 items-start inner-game-container">
					{/* Sidebar */}
					<Sidebar />

					{/* Main Content */}
					<div className="flex-1 min-h-500 mt-24 bg-white border-2 p-6">
						{children}
					</div>

					{/* Rightbar */}
					<Rightbar />
				</div>
			</div>
		</div>
	);
}
