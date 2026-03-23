/** @format */

export interface IChapter {
	level: string;
	slug: string;
	title: string;
	description: string;
	img?: string;
	sections: ISection[];
}

export interface ISection {
	level: string;
	slug: string;
	title: string;
	isFinalBoss: boolean;

	lessons?: ILesson[]; // optional karena boss ga punya lessons
	boss?: IBoss; // hanya ada kalau isFinalBoss = true
}

export interface ILesson {
	level: string;
	slug: string;
	title: string;
	contents: IContent[];
}

export type IContent = IMaterial | IQuestion;

export interface IBaseContent {
	slug: string;
	type: "material" | "question";
}

export interface IMaterial extends IBaseContent {
	type: "material";
	title?: string;
	content: string; // HTML string (dangerouslyInnerHTML)
}

export interface IQuestion extends IBaseContent {
	type: "question";
	question: string;
	choices: IChoice[];
	correctAnswer: string;

	explanationCorrect: string;
	explanationWrong: string;
}

export interface IChoice {
	option: string; // "a", "b", "c", "d"
	content: string;
}

export interface IBoss {
	type: "debate";
	slug: string;
	title: string;
	question: string;
	expectedPoints: string[];
}
