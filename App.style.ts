import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		App: {
			zIndex: 1,

			height: "100%",
			width: "100%",

			display: "flex",
			justifyContent: "flex-start",

			position: "relative",
		},

		AppLoading: {
			zIndex: 1,

			height: "100%",
			width: "100%",

			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};
