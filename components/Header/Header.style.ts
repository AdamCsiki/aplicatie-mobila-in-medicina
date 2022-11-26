import { StyleSheet, StatusBar, Platform } from "react-native";
import Colors from "../../constants/Colors";
import padding from "../../misc/padding";

let statusBarHeight = StatusBar.currentHeight ?? 16;

export default StyleSheet.create({
	Header: {
		backgroundColor: Colors.mainColor,

		width: "100%",
		height: "auto",

		...padding(16, 8),

		paddingTop: Platform.OS === "android" ? statusBarHeight + 8 : 16,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",

		position: "relative", // may need to make it absolute

		zIndex: 100,

		top: 0,
		left: 0,
		right: 0,
	},

	HeaderIcon: {
		color: Colors.black,
	},
});
