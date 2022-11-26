import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import padding from "../../misc/padding";

export default StyleSheet.create({
	UserContainer: {
		backgroundColor: Colors.white10,
		borderRadius: 25,

		...padding(10),

		margin: 5,

		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
