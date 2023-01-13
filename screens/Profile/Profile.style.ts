import { useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet, useColorScheme } from "react-native";
import { themeColors } from "../../misc/ThemeProvider";
import padding from "../../misc/padding";

export default () => {
	const { colors } = useTheme();
	return StyleSheet.create({
		Profile: {
			backgroundColor: colors.background,

			width: "100%",
			height: "100%",

			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
		},
		profileBackground: {
			backgroundColor: colors.tint,

			width: "100%",
			height: 220,

			borderBottomLeftRadius: 500,

			position: "relative",
		},
		profileUser: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start",

			position: "absolute",

			top: 55,
			left: -5,
		},
		profileImage: {
			width: 150,
			height: 150,

			borderRadius: 250,
		},
		profileUsername: {
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		profileHeader: {
			width: "100%",

			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		profileMain: {
			backgroundColor: "#00000090",

			width: "100%",
			height: "100%",

			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",

			flexGrow: 1,
		},
		profileDiv: {
			backgroundColor: colors.background,

			width: "100%",

			...padding(10),
		},
	});
};
