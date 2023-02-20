import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		ScrollContainer: {
			backgroundColor: theme["color-basic-100"],

			minWidth: 100,
			minHeight: 50,

			width: "100%",

			maxWidth: "100%",
			maxHeight: "100%",

			padding: 16,

			borderRadius: 16,
		},
	});
};
