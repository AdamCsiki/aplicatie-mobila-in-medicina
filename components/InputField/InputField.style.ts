import { themeColors, useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "../../misc/ThemeProvider";
import padding from "../../misc/padding";

export default () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		InputFieldContainer: {
			width: "100%",

			...padding(5, 10),

			display: "flex",
			flexDirection: "row",
			justifyContent: "flex-start",
			alignItems: "center",
		},
		InputField: {
			borderBottomWidth: 1,

			marginLeft: 10,

			fontSize: 16,

			color: colors.text,
			borderColor: colors.placeholder,

			flexGrow: 1,
		},
		inputFieldLabel: {
			color: colors.text,
		},
		inputFieldPlaceHolder: {
			color: colors.placeholder,
		},
	});
};
