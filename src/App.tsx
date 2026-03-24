/** @format */

import { Route, Routes } from "react-router";

import Home from "@/pages/Home";
import Login from "@/pages/Login";

import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { useAuth } from "./context/useAuth";
import BossFight from "./pages/Game/BossFight";
import Chapter from "./pages/Game/Chapter";
import Dashboard from "./pages/Game/Dashboard";
import Lesson from "./pages/Game/Lesson";

function App() {
	const { loading } = useAuth();

	if (loading) return <div>Loading...</div>;

	return (
		<Routes>
			{/* PUBLIC */}
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />

			{/* PROTECTED */}
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/chapter/:chapterSlug"
				element={
					<ProtectedRoute>
						<Chapter />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/chapter/:chapterSlug/:sectionSlug/:lessonSlug"
				element={
					<ProtectedRoute>
						<Lesson />
					</ProtectedRoute>
				}
			/>

			<Route
				path="/chapter/:chapterSlug/boss-fight"
				element={
					<ProtectedRoute>
						<BossFight />
					</ProtectedRoute>
				}
			/>
		</Routes>
	);
}

export default App;
