import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Sizes from "../../constants/Sizes";
import padding from "../../misc/padding";

export default StyleSheet.create({
	Drawer: {
		backgroundColor: Colors.black,
		height: "100%",

		padding: 0,
		margin: 0,

		borderBottomLeftRadius: 100,

		flexGrow: 1,

		display: "flex",
	},
	DrawerHeader: {
		backgroundColor: Colors.mainColor,

		width: "100%",
		height: 200,

		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25,

		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
});
