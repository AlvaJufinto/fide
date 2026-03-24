/** @format */

import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
	token: string | null;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
	loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [token, setToken] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);

	// init
	useEffect(() => {
		const stored = localStorage.getItem("token");
		if (stored) setToken(stored);
		setLoading(false);
	}, []);

	const login = async (email: string, password: string) => {
		const res = await fetch(
			`${import.meta.env.VITE_BASE_ENDPOINT}/auth/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			},
		);

		const json = await res.json();

		if (!json.success) {
			throw new Error(json.message);
		}

		const accessToken = json.data.access_token;

		localStorage.setItem("token", accessToken);
		setToken(accessToken);
	};

	const logout = () => {
		localStorage.removeItem("token");
		setToken(null);
	};

	return (
		<AuthContext.Provider
			value={{
				token,
				login,
				logout,
				isAuthenticated: !!token,
				loading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
};
