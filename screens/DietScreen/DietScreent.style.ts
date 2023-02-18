import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

export default StyleSheet.create({
	DietScreen: {
		display: "flex",
		flexGrow: 1,

		...padding(16),
	},
	StatContainer: {
		width: "100%",
		minHeight: 250,
		height: "auto",

		...padding(16, 16, 32, 16),

		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
