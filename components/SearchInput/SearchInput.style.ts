import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import padding from "../../misc/padding";

export default StyleSheet.create({
	SearchInput: {
		backgroundColor: Colors.white50,

		height: 50,

		paddingLeft: 16,
		paddingRight: 16,

		marginRight: 15,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",

		flexGrow: 1,

		borderRadius: 100,

		overflow: "hidden",
	},
	TextInput: {
		fontSize: 16,

		flexGrow: 1,
	},
});
