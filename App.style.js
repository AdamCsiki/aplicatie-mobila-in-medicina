import { StyleSheet } from "react-native";
import Colors from "./constants/Colors";

export default StyleSheet.create({
	container: {
		zIndex: 1,

		backgroundColor: Colors.light.background,

		flex: 1,

		justifyContent: "flex-start",
		alignItems: "center",

		position: "relative",
	},
});
