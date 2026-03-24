/** @format */

import "./index.css";

import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import App from "./App.tsx";
import { AuthProvider } from "./context/useAuth.tsx";

createRoot(document.getElementById("root")!).render(
	<AuthProvider>
		<BrowserRouter>
			<StrictMode>
				<App />
			</StrictMode>
		</BrowserRouter>
	</AuthProvider>,
);
