import { StyleSheet, StatusBar, Platform } from "react-native";
import Colors from "../../constants/Colors";
import padding from "../../misc/padding";

export default StyleSheet.create({
	Header: {
		shadowColor: "black",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 3,

		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,

		width: "100%",

		...padding(16, 0),

		paddingTop:
			Platform.OS === "android" ? StatusBar.currentHeight + 16 : 16,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},
	ProfileContainer: {},
});
