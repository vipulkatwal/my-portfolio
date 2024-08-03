/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			gridTemplateColumns: {
				auto: "repeat(auto-fit, minmax(200px, 1fr))",
			},
			fontFamily: {
				display: ["Creepster", "sans-serif"],
				script: ["Dancing Script", "cursive"],
				headline: ["Krona One", "sans-serif"],
				handwriting: ["Shadows Into Light", "cursive"],
				playful: ["Fredoka One", "sans-serif"],
			},
			animation: {
				spin_slow: "spin 6s linear infinite",
			},
			colors: {
				lightHover: "#fcf4ff",
				darkHover: "#2a004a",
				darkTheme: "#11001F",
			},
			boxShadow: {
				black: "4px 4px 0 #000",
				white: "4px 4px 0 #fff",
			},
		},
	},
	darkMode: "selector",
	plugins: [],
};
