/** @format */

import { useEffect, useState } from "react";

import { useNavigate } from "react-router";

import Button from "@/components/ui/Button";
import { useAuth } from "@/context/useAuth";
import useTyping from "@/hooks/useTyping";

function Input({
	label,
	type = "text",
	value,
	onChange,
}: {
	label: string;
	type?: string;
	value: string;
	onChange: (e: any) => void;
}) {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-xs font-bold">{label}</p>
			<input
				type={type}
				value={value}
				onChange={onChange}
				className="border-3 border-black px-3 py-2 bg-white focus:outline-none shadow-[3px_3px_0px_black]"
			/>
		</div>
	);
}

/* ================= LOGIN ================= */
export default function Login() {
	const { login, isAuthenticated } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("user@gmail.com");
	const [password, setPassword] = useState("password");
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState("IDLE");

	useEffect(() => {
		if (isAuthenticated) navigate("/dashboard");
	}, [isAuthenticated, navigate]);

	const systemMessage = useTyping(
		"Welcome, player. Your journey to grow in faith begins here.",
		20,
	);

	const statusText = useTyping(loading ? "AUTHENTICATING..." : status, 30);

	const handleLogin = async (e: any) => {
		e.preventDefault();
		try {
			setLoading(true);
			setStatus("CONNECTING...");
			await login(email, password);
			setStatus("SUCCESS");
			setInterval(() => window.location.reload(), 200);
		} catch (err) {
			console.error(err);
			setStatus("FAILED");
		} finally {
			setLoading(false);
		}
	};

	const getStatusStyle = () => {
		if (status === "SUCCESS")
			return "text-success border-green-500 bg-green-100";
		if (status === "FAILED") return "text-error border-red-500 bg-red-100";
		if (loading) return "text-yellow-600 border-yellow-500 bg-yellow-100";
		return "text-black border-black bg-gray-100";
	};

	return (
		<div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
			<div className="hidden md:flex flex-col justify-between bg-primary text-white p-8 border-r-5 border-black">
				<Button
					onClick={() => navigate("/")}
					customClass="w-fit border-3 border-black px-4 py-2 bg-white! text-black font-bold shadow-[3px_3px_0px_black]"
				>
					{"<"} EXIT
				</Button>

				<div className="space-y-6">
					<h1 className="text-4xl font-bold">FIDE SYSTEM</h1>

					<div className="border-3 border-black bg-white text-black p-4 shadow-[4px_4px_0px_black] animate-float-pixel">
						<p className="text-xs font-bold mb-2">SYSTEM MESSAGE</p>
						<p className="text-sm min-h-10">{systemMessage}</p>
					</div>

					<div className="text-sm font-bold opacity-90">
						STATUS: {statusText}
					</div>
				</div>

				<p className="text-xs opacity-70">
					FIDE v1.0 • Faith Interactive Development Engine
				</p>
			</div>

			<div className="flex items-center justify-center p-6 bg-[#f9f9f9]">
				<div className="w-full max-w-md border-5 border-black bg-white p-6 shadow-[6px_6px_0px_black] space-y-5 relative">
					<div className="absolute -top-3 left-4 bg-yellow-400 border-2 border-black px-2 text-xs font-bold">
						AUTH PANEL
					</div>

					<Button
						onClick={() => navigate("/")}
						customClass="md:hidden text-xs font-bold underline"
					>
						{"<"} EXIT
					</Button>

					<div>
						<h1 className="text-xl font-bold">PLAYER LOGIN</h1>
						<p className="text-xs text-gray font-bold">
							Enter your credentials to continue
						</p>
					</div>

					<form onSubmit={handleLogin} className="space-y-4">
						{/* DISCLAIMER BANNER */}
						<div className="w-full bg-yellow-300 border-2 border-black p-2 text-sm font-bold text-center mb-4 shadow-[2px_2px_0px_black]">
							Default credentials already filled: <br />
							<b>Email:</b> user@gmail.com &nbsp; | &nbsp; <b>Password:</b>{" "}
							password
						</div>

						<Input
							label="EMAIL"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<Input
							label="PASSWORD"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>

						<div className="pt-2">
							<Button disabled={loading} customClass="w-full py-2">
								{loading ? "AUTHENTICATING..." : "LOGIN"}
							</Button>
						</div>
					</form>

					<div
						className={`border-3 p-3 text-sm font-bold text-center transition-all ${getStatusStyle()}`}
					>
						{statusText}
					</div>
				</div>
			</div>
		</div>
	);
}
