/** @format */

const BASE_URL = import.meta.env.VITE_BASE_ENDPOINT;

type ApiResponse<T = any> = {
	success: boolean;
	data?: T;
	message?: string;
};

type RequestOptions = {
	method?: "GET" | "POST";
	body?: any;
	token?: string;
};

// Utility: convert snake_case keys to camelCase recursively
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

async function request<T = any>(
	endpoint: string,
	options: RequestOptions = {},
): Promise<ApiResponse<T>> {
	const { method = "GET", body, token } = options;

	const res = await fetch(`${BASE_URL}${endpoint}`, {
		method,
		headers: {
			"Content-Type": "application/json",
			...(token && { Authorization: `Bearer ${token}` }),
		},
		...(body && { body: JSON.stringify(body) }),
	});

	const json = await res.json();

	// otomatis convert data camelCase
	if (json.data) {
		json.data = snakeToCamel(json.data);
	}

	return json;
}

export const api = {
	login: (email: string, password: string) =>
		request("/auth/login", { method: "POST", body: { email, password } }),

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
	submitAnswer: (
		token: string,
		payload: { contentSlug: string; selectedOption: string },
	) => request("/answers", { method: "POST", body: payload, token }),
	getProgress: (token: string) => request("/progress", { token }),
	updateLessonProgress: (
		token: string,
		lessonSlug: string,
		payload?: {
			status?: "not_started" | "in_progress" | "completed";
			lastContentSlug?: string;
		},
	) =>
		request(`/progress/lesson/${lessonSlug}`, {
			method: "POST",
			body: payload,
			token,
		}),
	updateContentProgress: (
		token: string,
		contentSlug: string,
		payload?: { isCompleted?: boolean },
	) =>
		request(`/progress/content/${contentSlug}`, {
			method: "POST",
			body: payload,
			token,
		}),
	submitBoss: (
		token: string,
		bossSlug: string,
		payload: { answerText: string },
	) =>
		request(`/boss/${bossSlug}/submit`, {
			method: "POST",
			body: payload,
			token,
		}),
};
