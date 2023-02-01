import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";
import padding from "../../misc/padding";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		DietScreen: {
			display: "flex",
			flexGrow: 1,

			...padding(0, 16),

			borderWidth: 1,
		},
		StatContainer: {
			width: "100%",
			minHeight: 250,
			height: "auto",

			...padding(16, 16),

			display: "flex",
			flexDirection: "column",
			justifyContent: "space-around",
			alignItems: "flex-start",
		},
	});
};
