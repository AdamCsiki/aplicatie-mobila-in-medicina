import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

export default StyleSheet.create({
	DietAddScreen: {
		...padding(16),

		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",

		flexGrow: 1,
	},
	DietAddScreenContainer: {
		width: "100%",
		minHeight: 150,

		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
});
