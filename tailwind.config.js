/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				lineMove: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				lineMove: 'lineMove 0.8s ease-in-out infinite',
			},
			colors: {
				neonPurple: '#9b5cff',
				darkBg: '#0b0f19',
			},
		},
	},
	plugins: [],
}
