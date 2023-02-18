import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";

export default () => {
	const theme = useTheme();
	return StyleSheet.create({
		Container: {
			minWidth: 100,
			minHeight: 50,

			maxWidth: "100%",
			maxHeight: "100%",

			padding: 16,

			borderRadius: 16,

			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start",
		},
	});
};
