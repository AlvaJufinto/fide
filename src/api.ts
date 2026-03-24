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

	return res.json();
}

export const api = {
	//========= LOGIN ==============
	login: (email: string, password: string) =>
		request("/auth/login", {
			method: "POST",
			body: { email, password },
		}),

	/* ===== CHAPTERS ===== */
	getChapters: () => request("/chapters"),

	getChapter: (slug: string) => request(`/chapters/${slug}`),

	getChapterFull: (slug: string) => request(`/chapters/${slug}/full`),

	/* ===== SECTIONS ===== */
	getSection: (slug: string) => request(`/sections/${slug}`),

	getSectionsByChapter: (chapterSlug: string) =>
		request(`/chapters/${chapterSlug}/sections`),

	getSectionBoss: (sectionSlug: string) =>
		request(`/sections/${sectionSlug}/boss`),

	/* ===== LESSONS ===== */
	getLesson: (slug: string) => request(`/lessons/${slug}`),

	getLessonsBySection: (sectionSlug: string) =>
		request(`/sections/${sectionSlug}/lessons`),

	getLessonFull: (slug: string) => request(`/lessons/${slug}/full`),

	/* ===== CONTENTS ===== */
	getContent: (slug: string) => request(`/contents/${slug}`),

	getContentsByLesson: (lessonSlug: string, type?: "material" | "question") =>
		request(`/lessons/${lessonSlug}/contents${type ? `?type=${type}` : ""}`),

	/* ===== ANSWERS (AUTH) ===== */
	submitAnswer: (
		token: string,
		payload: {
			contentSlug: string;
			selectedOption: string;
		},
	) =>
		request("/answers", {
			method: "POST",
			body: payload,
			token,
		}),

	/* ===== PROGRESS (AUTH) ===== */
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

	/* ===== BOSS (AUTH) ===== */
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
