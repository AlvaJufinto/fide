/** @format */

import { createContext, useContext, useEffect, useState } from "react";

import { api } from "@/api";

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

	useEffect(() => {
		const stored = localStorage.getItem("token");
		if (stored) setToken(stored);
		setLoading(false);
	}, []);

	/* ===== LOGIN ===== */
	const login = async (email: string, password: string) => {
		const res = await api.login(email, password);

		if (!res.success) {
			throw new Error(res.message);
		}

		const accessToken = res.data.access_token;

		localStorage.setItem("token", accessToken);
		setToken(accessToken);
	};

	/* ===== LOGOUT ===== */
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
