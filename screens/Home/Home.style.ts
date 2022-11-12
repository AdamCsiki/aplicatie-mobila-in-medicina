import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import boxShadow from "../../misc/boxShadow";
import padding from "../../misc/padding";

export default StyleSheet.create({
	Home: {
		width: "100%",
		height: "100%",

		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
	},
	homeHeader: {
		backgroundColor: Colors.white,
		borderColor: Colors.black,

		width: "100%",

		...boxShadow(4, -2, 3, 1, "#000000", 5),
		shadowOffset: {
			width: 4,
			height: -50,
		},

		...padding(10),
		display: "flex",
	},
	homeNewsContainer: {
		height: 100,
	},
	homeNews: {
		backgroundColor: "#ababab",

		...padding(10),

		display: "flex",
		flexDirection: "row",
	},
	homeNewsContent: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
});
