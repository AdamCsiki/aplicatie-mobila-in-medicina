import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import padding from "../../misc/padding";

export default StyleSheet.create({
	SearchInput: {
		backgroundColor: Colors.white50,

		height: "auto",

		marginRight: 15,

		paddingRight: 16,

		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",

		borderRadius: 100,

		overflow: "hidden",
	},
	TextInput: {
		fontSize: 16,

		...padding(8, 16),

		flexGrow: 1,
	},
});
