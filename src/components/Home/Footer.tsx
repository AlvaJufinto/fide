/** @format */
import FideLogo from "@/assets/logo/fide-text-logo.png";

function Footer() {
	return (
		<footer className="mt-24 outer-container">
			<div className="inner-container pb-40">
				<div className="w-full border-black border-4 shadow-[4px_4px_0px_var(--color-gray)] flex justify-between items-center p-6">
					<img src={FideLogo} className="w-30" alt="Fide Logo" />
					<div className="flex gap-10 flex-1 items-center justify-center">
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
					<p className="w-40 text-right font-bold text-black">
						©2026 Fide. Learn the Faith, Joyful Hearts!
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
