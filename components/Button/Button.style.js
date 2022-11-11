import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

const styles = StyleSheet.create({
	Button: {
		...padding(15, 15, 15, 15),

		borderRadius: 15,

		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default styles;
