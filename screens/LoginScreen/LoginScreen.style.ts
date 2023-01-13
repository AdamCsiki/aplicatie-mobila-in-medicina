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
			backgroundColor: colors.background,

			...padding("10%", "10%"),

			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "center",

			flexGrow: 1,
		},
		loginHeaderContainer: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",

			flexGrow: 1,
		},
		loginHeader: {
			color: colors.text,
		},
		loginInputContainer: {
			height: "30%",

			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",

			flexGrow: 1,
		},
		loginInput: {
			marginBottom: "5%",
		},
		loginButtonContainer: {
			width: "100%",

			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",

			flexGrow: 1,
		},
		loginButton: {
			width: "25%",
		},
	});
};
