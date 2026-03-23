/** @format */

import { Route, Routes } from "react-router";

import Home from "@/pages/Home";

import Chapter from "./pages/Game/Chapter";
import Dashboard from "./pages/Game/Dashboard";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/chapter/:chapterSlug" element={<Chapter />} />
		</Routes>
	);
}

export default App;
