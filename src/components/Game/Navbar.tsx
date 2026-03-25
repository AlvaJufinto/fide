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

import Button from '../ui/Button';

function Navbar() {
	const { logout } = useAuth();

	const [profile, setProfile] = useState<ProfileData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		api
			.getProfile()
			.then((res) => {
				if (res.success && res.data) setProfile(res.data);
			})
			.finally(() => setLoading(false));
	}, []);
	const handleLogout = () => {
		if (confirm("Are you sure want to Logout?")) logout();
	};

	return (
		<nav className="z-10 fixed border-b-2 h-20 outer-container w-full top-0 left-0 bg-white">
			<div className="inner-game-container flex justify-between items-center">
				<img src={FideLogo} className="w-40" alt="Fide Logo" />
				<div className="flex gap-10">
					<div className="flex gap-5">
						<div className="flex items-center gap-2 text-2xl text-primary">
							<img src={SacredHeart} alt="streaks" />
							<p>2</p>
						</div>
						<div className="flex items-center gap-2 text-2xl text-yellow">
							<img src={Cross} alt="grace points" />
							<p>{loading ? "0" : profile?.points}</p>
						</div>
					</div>
					<Button onClick={handleLogout} customClass="py-2 px-4">
						Logout
					</Button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
