import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
	ChatList: {
		backgroundColor: Colors.black,
		color: Colors.white,

		flexGrow: 1,
	},
	ChatListScroll: {
		backgroundColor: Colors.white10,

		padding: 5,

		flexGrow: 1,

		display: "flex",
		flexDirection: "column",
	},
	ChatListContainerStyle: {
		justifyContent: "center",
	},
	ChatListHeader: {
		backgroundColor: Colors.mainColor,
		color: Colors.black,
	},
});
