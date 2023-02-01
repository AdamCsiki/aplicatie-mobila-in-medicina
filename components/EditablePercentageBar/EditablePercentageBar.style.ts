import { StyleSheet } from "react-native";
import { useTheme } from "@ui-kitten/components";

export default () => {
	const theme = useTheme();

	return StyleSheet.create({
		EditablePercentageBar: {
			width: "100%",
		},
	});
};
