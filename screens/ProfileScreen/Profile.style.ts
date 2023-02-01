import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import padding from "../../misc/padding";
import margin from "../../misc/margin";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		Profile: {
			backgroundColor: theme["color-basic-100"],
			width: "100%",
			height: "100%",

			display: "flex",
			flexDirection: "column",
			alignItems: "flex-start",
		},
		profileBackground: {
			backgroundColor: theme["color-primary-100"],

			width: "100%",
			height: 220,

			marginBottom: 16,

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
			textAlign: "right",

			top: "15%",
			left: "15%",

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

			...padding(0, 16),

			...margin(12, 0),

			display: "flex",
			justifyContent: "flex-start",
			alignItems: "flex-start",

			flexGrow: 1,
		},
		profileContainer: {
			width: "100%",
		},
	});
};
