import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import TypeScale from "../../constants/TypeScale";
import padding from "../../misc/padding";

const styles = StyleSheet.create({
	Button: {
		backgroundColor: Colors.mainColor,
		...padding(15, 15, 15, 15),

		borderRadius: 15,

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
