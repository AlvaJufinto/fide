/** @format */

import {
	Route,
	Routes,
} from 'react-router';

import Home from '@/pages/Home';
import Login from '@/pages/Login';

import ProtectedRoute from './components/Auth/ProtectedRoute';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { useAuth } from './context/useAuth';
import BossFight from './pages/Game/BossFight';
import Chapter from './pages/Game/Chapter';
import Dashboard from './pages/Game/Dashboard';
import Help from './pages/Game/Help';
import Leaderboard from './pages/Game/Leaderboard';
import Lesson from './pages/Game/Lesson';
import Level from './pages/Game/Level';
import Profile from './pages/Game/Profile';

function App() {
	const { loading } = useAuth();

	if (loading) return <div>Loading...</div>;

	return (
		<>
			<ScrollToTop />
			<ErrorBoundary>
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
						path="/level"
						element={
							<ProtectedRoute>
								<Level />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/leaderboard"
						element={
							<ProtectedRoute>
								<Leaderboard />
							</ProtectedRoute>
						}
					/>

					<Route
						path="/profile"
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/help"
						element={
							<ProtectedRoute>
								<Help />
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
			</ErrorBoundary>
		</>
	);
}

export default App;
