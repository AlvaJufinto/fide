/** @format */
import FideLogo from "@/assets/logo/fide-text-logo.png";

function Footer() {
	return (
		<footer className="mt-24 outer-container">
			<div className="inner-container pb-20 sm:pb-30 lg:pb-40">
				<div className="w-full border-black border-4 shadow-[4px_4px_0px_var(--color-gray)] flex flex-col lg:flex-row items-center lg:items-center justify-between p-6 gap-6">
					{/* Logo */}
					<img src={FideLogo} className="w-24 sm:w-30" alt="Fide Logo" />

					{/* Links */}
					<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-10 items-center justify-center flex-1">
						<a className="font-bold text-gray" href="/">
							About Us
						</a>
						<a className="font-bold text-gray" href="/">
							Terms & Conditions
						</a>
						<a className="font-bold text-gray" href="/">
							Contact Us
						</a>
					</div>

					{/* Copyright */}
					<p className="text-center lg:text-right font-bold text-black max-w-[200px]">
						©2026 Fide. Learn the Faith, Joyful Hearts!
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
