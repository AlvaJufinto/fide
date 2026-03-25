/** @format */

const BASE_URL = import.meta.env.VITE_BASE_ENDPOINT;

type ApiResponse<T = any> = {
	success: boolean;
	data?: T;
	message?: string;
};

type RequestOptions = {
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: any;
	token?: string;
};

// snake_case → camelCase
function snakeToCamel(obj: any): any {
	if (Array.isArray(obj)) return obj.map(snakeToCamel);

	if (obj && typeof obj === "object") {
		return Object.fromEntries(
			Object.entries(obj).map(([key, value]) => [
				key.replace(/_([a-z])/g, (_, c) => c.toUpperCase()),
				snakeToCamel(value),
			]),
		);
	}

	return obj;
}

// safe JSON parse
async function safeJson(res: Response) {
	try {
		return await res.json();
	} catch {
		return null;
	}
}

function isTokenExpired(token: string) {
	try {
		const payload = JSON.parse(atob(token.split(".")[1]));
		const exp = payload.exp * 1000;

		return Date.now() > exp;
	} catch {
		return true;
	}
}

function handleAuthFailure() {
	localStorage.removeItem("token");

	window.location.href = "/login";
}

async function request<T = any>(
	endpoint: string,
	options: RequestOptions = {},
): Promise<ApiResponse<T>> {
	const { method = "GET", body } = options;

	let token = localStorage.getItem("token") || "";

	if (token && isTokenExpired(token)) {
		handleAuthFailure();
		return {
			success: false,
			message: "Session expired",
		};
	}

	let res: Response;

	try {
		res = await fetch(`${BASE_URL}${endpoint}`, {
			method,
			headers: {
				"Content-Type": "application/json",
				...(token ? { Authorization: `Bearer ${token}` } : {}),
			},
			...(body && { body: JSON.stringify(body) }),
		});
	} catch {
		return {
			success: false,
			message: "Network error",
		};
	}

	if (res.status === 401) {
		handleAuthFailure();

		return {
			success: false,
			message: "Unauthorized",
		};
	}

	const json = await safeJson(res);

	if (!json) {
		return {
			success: false,
			message: "Invalid server response",
		};
	}

	// normalize data
	if (json.data) {
		json.data = snakeToCamel(json.data);
	}

	return json;
}

// ===================== API =====================

export const api = {
	login: (email: string, password: string) =>
		request("/auth/login", {
			method: "POST",
			body: { email, password },
		}),

	getProfile: () => request("/profile"),

	// ===================== CONTENT =====================
	getChapters: () => request("/chapters"),
	getChapter: (slug: string) => request(`/chapters/${slug}`),
	getChapterFull: (slug: string) => request(`/chapters/${slug}/full`),

	getSection: (slug: string) => request(`/sections/${slug}`),
	getSectionsByChapter: (chapterSlug: string) =>
		request(`/chapters/${chapterSlug}/sections`),

	getSectionBoss: (sectionSlug: string) =>
		request(`/sections/${sectionSlug}/boss`),

	getLesson: (slug: string) => request(`/lessons/${slug}`),
	getLessonsBySection: (sectionSlug: string) =>
		request(`/sections/${sectionSlug}/lessons`),
	getLessonFull: (slug: string) => request(`/lessons/${slug}/full`),

	getContent: (slug: string) => request(`/contents/${slug}`),

	getContentsByLesson: (lessonSlug: string, type?: "material" | "question") =>
		request(`/lessons/${lessonSlug}/contents${type ? `?type=${type}` : ""}`),

	// ===================== ACTION =====================
	submitAnswer: (payload: { contentSlug: string; selectedOption: string }) =>
		request("/answers", {
			method: "POST",
			body: payload,
		}),

	getProgress: () => request("/progress"),

	updateLessonProgress: (
		lessonSlug: string,
		payload?: {
			status?: "not_started" | "in_progress" | "completed";
			lastContentSlug?: string;
		},
	) =>
		request(`/progress/lesson/${lessonSlug}`, {
			method: "POST",
			body: payload,
		}),

	updateContentProgress: (
		contentSlug: string,
		payload?: { isCompleted?: boolean },
	) =>
		request(`/progress/content/${contentSlug}`, {
			method: "POST",
			body: payload,
		}),

	submitBoss: (bossSlug: string, payload: { answerText: string }) =>
		request(`/boss/${bossSlug}/submit`, {
			method: "POST",
			body: payload,
		}),
};
