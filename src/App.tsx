/** @format */

import { Route, Routes } from "react-router";

import Home from "@/pages/Home";

import BossFight from "./pages/Game/BossFIght";
import Chapter from "./pages/Game/Chapter";
import Dashboard from "./pages/Game/Dashboard";
import Lesson from "./pages/Game/Lesson";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/chapter/:chapterSlug" element={<Chapter />} />
			<Route
				path="/chapter/:chapterSlug/:sectionSlug/:lessonSlug"
				element={<Lesson />}
			/>
			<Route path="/chapter/:chapterSlug/boss-fight" element={<BossFight />} />
		</Routes>
	);
}

export default App;
