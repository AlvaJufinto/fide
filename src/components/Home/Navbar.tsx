/** @format */

import { useState } from "react";

import FideLogo from "@/assets/logo/fide-text-logo.png";

import Button from "../ui/Button";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const LINKS = [
		{ name: "Welcome", route: "#welcome" },
		{ name: "Feature", route: "#features" },
		{ name: "Leveling", route: "#leveling" },
		{ name: "About Us", route: "#about-us" },
	];

	return (
		<>
			{/* Navbar */}
			<nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-2 h-20">
				<div className="max-w-233 mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
					<img src={FideLogo} className="w-32 md:w-40" alt="Fide Logo" />

					{/* Desktop */}
					<div className="hidden md:flex gap-6 items-center">
						{LINKS.map((link, i) => (
							<a key={i} className="font-bold text-primary" href={link.route}>
								{link.name}
							</a>
						))}
						<Button customClass="px-5 py-1" to="/dashboard">
							Play
						</Button>
					</div>

					{/* Hamburger */}
					<button
						className="md:hidden flex flex-col gap-1"
						onClick={() => setIsOpen(!isOpen)}
					>
						<span className="w-6 h-[2px] bg-black"></span>
						<span className="w-6 h-[2px] bg-black"></span>
						<span className="w-6 h-[2px] bg-black"></span>
					</button>
				</div>
			</nav>

			{/* Spacer */}
			<div className="h-20" />

			{/* Floating Mobile Menu */}
			<div
				className={`
					fixed top-22 left-0 w-full z-40 px-4
					transition-all duration-300 ease-out
					${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
				`}
			>
				<div
					className={`
						max-w-[932px] mx-auto bg-white shadow-lg p-4 flex flex-col gap-4 border-2
						transition-all duration-300 ease-out
						${isOpen ? "scale-100" : "scale-95"}
					`}
				>
					{LINKS.map((link, i) => (
						<a
							key={i}
							className="font-bold text-primary"
							href={link.route}
							onClick={() => setIsOpen(false)}
						>
							{link.name}
						</a>
					))}
					<Button customClass="w-full py-2">Play</Button>
				</div>
			</div>
		</>
	);
}

export default Navbar;
