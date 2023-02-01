import { useTheme } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		PercentageBarContainer: {
			maxHeight: 16,
			width: "100%",
			position: "relative",

			borderRadius: 16,

			borderWidth: 1,
		},
		PercentageBar: {
			height: "100%",

			backgroundColor: theme["color-success-500"],

			borderRadius: 16,
		},
		PercentageBarText: {
			position: "absolute",
			margin: 0,
			padding: 0,
			top: -1,
			left: "50%",
		},
	});
};
