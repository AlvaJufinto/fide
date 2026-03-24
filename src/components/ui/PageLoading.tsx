/** @format */
import { useEffect, useState } from "react";

/* ===================== REUSABLE PAGE LOADING ===================== */
interface PageLoadingProps {
	isLoading: boolean;
	loadingText?: string;
}

export const quotes = [
	{
		text: "“Pray as though everything depended on God. Work as though everything depended on you.”",
		author: "St. Augustine",
	},
	{
		text: "“Faith is to believe what you do not see; the reward of this faith is to see what you believe.”",
		author: "St. Augustine",
	},
	{
		text: "“The sacraments are the privileged way in which the faithful receive grace.”",
		author: "Catechism of the Catholic Church",
	},
	{
		text: "“Do not be afraid to be saints. Follow Jesus Christ who is the source of freedom and light.”",
		author: "St. John Paul II",
	},
	{
		text: "“Love God, serve God, everything is contained in these words.”",
		author: "St. Ignatius of Loyola",
	},
	{
		text: "“Preach the Gospel at all times and when necessary use words.”",
		author: "St. Francis of Assisi",
	},
	{
		text: "“The world offers you comfort. But you were not made for comfort. You were made for greatness.”",
		author: "Pope Benedict XVI",
	},
	{
		text: "“Spread love everywhere you go. Let no one ever come to you without leaving happier.”",
		author: "St. Teresa of Calcutta",
	},
	{
		text: "“To fall in love with God is the greatest romance; to seek him the greatest adventure.”",
		author: "St. Augustine",
	},
	{
		text: "“Apart from the cross, there is no other ladder by which we may get to heaven.”",
		author: "St. Rose of Lima",
	},
	{
		text: "“The Eucharist is the highway to heaven.”",
		author: "Bl. Carlo Acutis",
	},
	{
		text: "“Charity is the root of all good works.”",
		author: "St. Augustine",
	},
	{
		text: "“Hold your eyes on God and leave the doing to Him. That is all the care you need have.”",
		author: "St. Jane Frances de Chantal",
	},
	{
		text: "“In my deepest wound I saw your glory, and it dazzled me.”",
		author: "St. Augustine",
	},
	{
		text: "“Let nothing disturb you, nothing frighten you, all things are passing, God is unchanging.”",
		author: "St. Teresa of Avila",
	},
	{
		text: "“Be who God meant you to be and you will set the world on fire.”",
		author: "St. Catherine of Siena",
	},
	{
		text: "“The Rosary is the weapon for these times.”",
		author: "St. Padre Pio",
	},
	{
		text: "“You cannot be half a saint; you must be a whole saint or no saint at all.”",
		author: "St. Therese of Lisieux",
	},
	{
		text: "“True charity consists in putting up with all one’s neighbor’s faults.”",
		author: "St. Therese of Lisieux",
	},
	{
		text: "“To live without faith, without a patrimony to defend, is not living, but existing.”",
		author: "Bl. Pier Giorgio Frassati",
	},
];

export function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

export default function PageLoading({
	isLoading,
	loadingText = "LOADING...",
}: PageLoadingProps) {
	const [quote, setQuote] = useState(getRandomQuote());

	useEffect(() => {
		if (isLoading) setQuote(getRandomQuote());
	}, [isLoading]);

	if (!isLoading) return null;

	return (
		<div className="flex flex-col items-center justify-center w-full mt-16">
			<div className="border-5 border-black bg-white px-6 py-4 shadow-[6px_6px_0px_black] flex flex-col items-center text-center animate-float-pixel max-w-md">
				<h1 className="text-xl font-bold mb-3">{loadingText}</h1>
				<div className="border-3 border-black p-4 mt-2 bg-gray-100 max-w-xs text-xs md:text-sm">
					<p className="italic mb-2">{quote.text}</p>
					<p className="font-bold text-right mt-1">— {quote.author}</p>
				</div>
				<div className="mt-4 w-12 h-12 border-4 border-black animate-spin rounded-full"></div>
			</div>
		</div>
	);
}
