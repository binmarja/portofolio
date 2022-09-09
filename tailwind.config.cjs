/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkblue: {
					100: "#355B9B",
					200: "#16086D",
					300: "#0C073C"
				},
				background: "#0a192f"
			}
		}
	},
	plugins: []
}
