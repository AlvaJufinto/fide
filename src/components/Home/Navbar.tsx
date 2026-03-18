/** @format */

import FideLogo from "@/assets/logo/fide-text-logo.png";

import Button from "../ui/Button";

function Navbar() {
	const LINKS = [
		{
			name: "Welcome",
			route: "#welcome",
		},
		{
			name: "Feature",
			route: "#feature",
		},
		{
			name: "Leveling",
			route: "#leveling",
		},
		{
			name: "About Us",
			route: "#about-us",
		},
	];

	return (
		<nav className="border-b-2 h-20 outer-container">
			<div className="inner-container flex justify-between items-center">
				<img src={FideLogo} className="w-40" alt="Fide Logo" />
				<div className="flex gap-6 items-center text-md">
					{LINKS.map((link, i) => (
						<a key={i} className="font-bold text-primary" href={link.route}>
							{link.name}
						</a>
					))}
					<Button customClass="px-10 py-1">Play</Button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
