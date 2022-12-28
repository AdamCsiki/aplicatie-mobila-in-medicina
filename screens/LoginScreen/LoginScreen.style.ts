import { useTheme } from "../../misc/ThemeProvider";
import { StyleSheet } from "react-native";
import padding from "../../misc/padding";

export default () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		Login: {
			flexGrow: 1,
		},
		LoginContainer: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",

			flexGrow: 1,

			...padding("5%", "10%"),
		},
		loginInputContainer: {
			borderWidth: 1,
			borderColor: colors.text,

			height: "30%",

			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",
		},
		loginInput: {
			width: "100%",
			borderBottomColor: colors.text,
			borderBottomWidth: 1,
		},
	});
};
