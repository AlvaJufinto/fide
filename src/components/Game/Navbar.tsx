/** @format */

import {
	useEffect,
	useState,
} from 'react';

import { api } from '@/api';
import Cross from '@/assets/game/cross.svg';
import SacredHeart from '@/assets/game/sacred-heart.svg';
import FideLogo from '@/assets/logo/fide-text-logo.png';
import { useAuth } from '@/context/useAuth';
import type { ProfileData } from '@/interfaces/profile';

import LogoutModal from '../Auth/LogoutModal';
import Button from '../ui/Button';

function Navbar() {
	const { logout } = useAuth();

	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);
	const [streak, setStreak] = useState(0);

	const [isLogoutOpen, setIsLogoutOpen] = useState(false);

	useEffect(() => {
		api
			.getProfile()
			.then((res) => {
				if (res.success && res.data) setProfile(res.data);
			})
			.finally(() => setLoading(false));

		api
			.getStreaks()
			.then((res) => {
				if (res.success && res.data) setStreak(res.data.currentStreak);
			})
			.finally(() => setLoading(false));
	}, []);

	const handleLogout = () => {
		logout();
	};

	return (
		<>
			<nav className="z-10 fixed border-b-2 h-20 outer-container w-full top-0 left-0 bg-white">
				<div className="inner-game-container flex justify-between items-center">
					<img src={FideLogo} className="w-40" alt="Fide Logo" />

					<div className="flex gap-10">
						<div className="flex gap-5">
							<div className="flex items-center gap-2 text-2xl text-primary">
								<img src={SacredHeart} alt="streaks" />
								<p>{loading ? "0" : streak}</p>
							</div>
							<div className="flex items-center gap-2 text-2xl text-yellow">
								<img src={Cross} alt="grace points" />
								<p>{loading ? "0" : profile?.points}</p>
							</div>
						</div>

						<Button
							onClick={() => setIsLogoutOpen(true)}
							customClass="py-2 px-4"
						>
							Logout
						</Button>
					</div>
				</div>
			</nav>

			<LogoutModal
				isOpen={isLogoutOpen}
				onClose={() => setIsLogoutOpen(false)}
				onConfirm={handleLogout}
			/>
		</>
	);
}

export default Navbar;
