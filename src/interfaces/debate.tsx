/** @format */

export type Speaker = "boss" | "player";

export type ChatMessage = {
	from: "boss" | "player" | "feedback";
	text: string;
};
