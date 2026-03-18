/** @format */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		//extend: {
		//	colors: {
		//		white: "#FFFFFF",
		//		black: "#000000",
		//		gray: "#636363",
		//		yellow: "#F9D01C",
		//		primary: "#971E32",
		//		overlay: "#E2E2E2",
		//		success: "#04A604",
		//		error: "#D30124",
		//	},
		//},
		keyframes: {
			floatPixel: {
				"0%, 100%": { transform: "translateY(0)" },
				"50%": { transform: "translateY(6px)" }, // kecil, biar kerasa pixel-step
			},
		},
		animation: {
			floatPixel: "floatPixel 1s steps(2, end) infinite",
		},
	},
};
