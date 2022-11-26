import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
	Chat: {
		backgroundColor: Colors.black,
		flexGrow: 1,

		padding: 10,
	},
	ChatContainer: {
		backgroundColor: Colors.white50,

		borderWidth: 1,
		borderColor: Colors.white75,
		borderRadius: 25,

		flexGrow: 1,

		padding: 5,
	},
	ChatMessageContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
	},
});
