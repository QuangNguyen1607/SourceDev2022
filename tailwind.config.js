module.exports = {
	content: ["./src/**/*.{pug,html,js}"],
	theme: {
		container: {
			center: true,
			maxWidth: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
			screens: {
				sm: "600px",
				md: "767.9",
				lg: "1023.67",
				xl: "1260px",
				"2xl": "1440px",
			},
		},
		extend: {},
	},
	plugins: [],
};
