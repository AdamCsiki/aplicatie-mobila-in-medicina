import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import padding from "../../misc/padding";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		Profile: {
			backgroundColor: theme["background-basic-color-1"],

			width: "100%",
			height: "100%",

			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
		},
		profileBackground: {
			backgroundColor: theme["background-primary-color-1"],

			width: "100%",
			height: 220,

			borderBottomLeftRadius: 500,

			position: "relative",
		},
		profileUser: {
			zIndex: 2,
			backgroundColor: "transparent",

			display: "flex",
			flexDirection: "row",
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
			backgroundColor: theme["background-basic-color-1"],

			borderTopRightRadius: 16,
			borderBottomRightRadius: 16,

			...padding(16, 32),
			paddingLeft: 16,

			top: 5,
			left: -6,

			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		profileHeader: {
			width: "100%",

			...padding(16),

			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		profileMain: {
			width: "100%",

			display: "flex",
			justifyContent: "flex-start",
			alignItems: "center",

			flexGrow: 1,
		},
	});
};
