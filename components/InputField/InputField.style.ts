import { themeColors, useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "../../misc/ThemeProvider";
import { scales } from "../../constants/TypeScale";
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
			color: colors.text,

			borderColor: colors.placeholder,
			borderBottomWidth: 2,

			marginLeft: 10,

			fontSize: scales.h6,
			fontWeight: "bold",

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
