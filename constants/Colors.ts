const mainColor = "#b2dbfa";
const secondColor = "#1f2159";
const black = "#141421";
const white = "#EAF0F4";
const highlight = "#41D975";

export default {
	// Main Color Palette
	mainColor: mainColor,
	secondColor: secondColor,
	black: black,
	black75: black + "75",
	black50: black + "50",
	black25: black + "25",
	black10: black + "10",
	white: white,
	white75: white + "75",
	white50: white + "50",
	white25: white + "25",
	white10: white + "10",
	highlight: highlight,

	// Custom palette for light/dark
	light: {
		text: black,
		background: white,
		tint: mainColor,
		tabIconDefault: white + "50",
		tabIconSelected: mainColor,
	},
	dark: {
		text: white,
		background: black,
		tint: mainColor,
		tabIconDefault: black + "50",
		tabIconSelected: mainColor,
	},
};
