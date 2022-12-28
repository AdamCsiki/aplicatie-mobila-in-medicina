import { useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

export default () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		Button: {
			backgroundColor: colors.button,

			...padding(12.5, 15),

			borderRadius: 15,

			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};