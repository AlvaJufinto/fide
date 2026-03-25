/** @format */

export interface ProfileData {
	userId: string;
	points: number;
	level: number;
	rank: string;
	breakdown: {
		correctAnswers: number;
		completedLessons: number;
		bossSubmissions: number;
		pointsPerCorrectAnswer: number;
		pointsPerCompletedLesson: number;
		pointsPerBossSubmission: number;
	};
	nextRank: {
		level: number;
		rank: string;
		requiredPoints: number;
		pointsToNextRank: number;
	};
}
