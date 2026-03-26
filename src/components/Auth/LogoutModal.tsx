/** @format */

import Button from '../ui/Button';

interface ILogoutModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
}

export default function LogoutModal({
	isOpen,
	onClose,
	onConfirm,
}: ILogoutModalProps) {
	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 "
			onClick={onClose}
		>
			<div
				className="bg-white p-6 w-[350px] shadow-xl text-center"
				onClick={(e) => e.stopPropagation()}
			>
				<h2 className="text-xl font-bold mb-2">Logout</h2>
				<p className="text-gray-600 mb-6">Are you sure you want to logout?</p>

				<div className="flex justify-center gap-4">
					<button onClick={onClose} className="px-4 py-2 border">
						Cancel
					</button>
					<Button
						onClick={onConfirm}
						customClass="px-4 py-2 bg-red-500 text-white`"
					>
						Logout
					</Button>
				</div>
			</div>
		</div>
	);
}
