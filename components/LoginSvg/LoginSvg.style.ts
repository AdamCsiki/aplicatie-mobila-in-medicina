import { useTheme } from "./../../misc/ThemeProvider";

import { StyleSheet } from "react-native";

export default () => {
	const { colors } = useTheme();

	return StyleSheet.create({
		LoginSvg: {
			width: 250,
			height: 200,

			backgroundColor: colors.background,
			color: colors.text,

			borderWidth: 1,
			borderColor: colors.text,

			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
	});
};
