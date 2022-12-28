import { useTheme } from "./../../misc/ThemeProvider";
import { StyleSheet } from "react-native";

export default () => {
	const { colors } = useTheme();
	return StyleSheet.create({
		RegisterScreen: {},
	});
};
