import { StyleSheet, Dimensions } from "react-native";
import padding from "../../misc/padding";
import margin from "../../misc/margin";

const headingSize = 250;

export default StyleSheet.create({
	Menu: {
		zIndex: 2,
		fontSize: 16,
		borderColor: "#121212",
		borderWidth: 10,

		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height - headingSize,

		...padding(10),

		top: headingSize,

		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignContent: "center",

		position: "absolute",
	},
});
