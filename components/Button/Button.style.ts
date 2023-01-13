import { useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

export default () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		Button: {
			backgroundColor: colors.button,

			minWidth: 125,
			minHeight: 60,

			maxWidth: 250,

			...padding(15, 20),

			borderRadius: 25,

			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};
