/** @format */

import { Navigate } from "react-router";

import { useAuth } from "@/context/useAuth";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const { isAuthenticated, loading } = useAuth();

	// tunggu token di-load dari localStorage
	if (loading) {
		return <div>Loading...</div>;
	}

	// kalau belum login lempar ke login
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return <>{children}</>;
}
