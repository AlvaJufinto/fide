/** @format */

import { useState } from "react";

import FrontGame from "@/components/layout/FrontGame";
import Button from "@/components/ui/Button";

const TABS = ["SYSTEM", "LEARNING FLOW", "PROGRESSION", "PURPOSE"];

function Help() {
	const [activeTab, setActiveTab] = useState("SYSTEM");

	return (
		<FrontGame>
			<div className="w-full flex flex-col items-center">
				{/* HEADER */}
				<div className="border-4 border-black shadow-[6px_6px_0px_black] px-6 py-4 text-center">
					<h1 className="text-3xl font-bold text-primary">FIDE CODEX</h1>
					<p className="text-xs mt-1">DOCTRINAL SYSTEM INTERFACE</p>
				</div>

				{/* TABS */}
				<div className="mt-6 flex border-4 border-black">
					{TABS.map((tab) => (
						<Button
							key={tab}
							onClick={() => setActiveTab(tab)}
							customClass={`px-5 py-2 cursor-pointer border-r-4 border-black text-xs font-bold
							${activeTab !== tab ? "text-black! bg-white!" : ""}`}
						>
							{tab}
						</Button>
					))}
				</div>

				{/* CONTENT */}
				<div className="w-full max-w-2xl mt-6 border-4 border-black shadow-[4px_4px_0px_black] p-6 text-sm flex flex-col gap-4">
					{/* ================= SYSTEM ================= */}
					{activeTab === "SYSTEM" && (
						<>
							<div className="border-2 border-black p-3">
								<strong>FOUNDATION</strong>
								<p>
									Fide is built on the Catechism structure: Credo, Sacraments,
									Moral Law, Prayer.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>DOCTRINAL APPROACH</strong>
								<p>
									All materials are presented as clear, non-ambiguous
									definitions to eliminate confusion and relativism.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>OBJECTIVE</strong>
								<p>
									Not only to know the faith, but to understand, live, and
									defend it logically.
								</p>
							</div>
						</>
					)}

					{/* ================= LEARNING FLOW ================= */}
					{activeTab === "LEARNING FLOW" && (
						<>
							<div className="border-2 border-black p-3">
								<strong>1. STUDY</strong>
								<p>
									Learn structured doctrinal material based on definitive
									teachings.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>2. QUIZ</strong>
								<p>
									Micro-assessment to test understanding and improve retention
									in real-time.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>3. DEBATE</strong>
								<p>
									Simulate defending the faith logically through AI-driven
									interaction.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>4. BOSS CHALLENGE</strong>
								<p>
									Final test requiring mastery of concepts and ability to
									articulate faith clearly.
								</p>
							</div>
						</>
					)}

					{/* ================= PROGRESSION ================= */}
					{activeTab === "PROGRESSION" && (
						<>
							<div className="border-2 border-black p-3">
								<strong>GRACE POINTS</strong>
								<p>
									Earned from correct answers, completed lessons, and boss
									challenges.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>LEVEL & RANK</strong>
								<p>
									Progress reflects depth of understanding, not just activity.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>STREAK SYSTEM</strong>
								<p>Encourages consistency in daily learning and discipline.</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>LEADERBOARD</strong>
								<p>
									Anonymous ranking system to maintain competition without
									fostering pride.
								</p>
							</div>
						</>
					)}

					{/* ================= PURPOSE ================= */}
					{activeTab === "PURPOSE" && (
						<>
							<div className="border-2 border-black p-3">
								<strong>PROBLEM</strong>
								<p>
									Modern Catholics often have shallow understanding, influenced
									by relativism and lack of formation.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>MISSION</strong>
								<p>
									Build a complete, consistent, and lived faith in the modern
									world.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>APPROACH</strong>
								<p>
									Structured, accessible, and interactive catechesis for all
									ages.
								</p>
							</div>

							<div className="border-2 border-black p-3">
								<strong>END GOAL</strong>
								<p>
									A believer who can understand, live, and defend the Catholic
									faith authentically.
								</p>
							</div>
						</>
					)}
				</div>

				{/* FOOTER */}
				<div className="mt-6 border-4 border-black px-4 py-2 text-xs shadow-[4px_4px_0px_black]">
					SYSTEM STATUS: OPERATIONAL
				</div>
			</div>
		</FrontGame>
	);
}

export default Help;
