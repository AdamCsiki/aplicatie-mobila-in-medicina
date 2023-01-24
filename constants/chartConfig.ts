import { useTheme } from "@ui-kitten/components";
import { ChartConfig } from "react-native-chart-kit/dist/HelperTypes";

export const chartConfig = () => {
	const theme = useTheme();

	const config: ChartConfig = {
		backgroundColor: theme["background-basic-color-1"],
		backgroundGradientFrom: theme["background-basic-color-1"],
		backgroundGradientTo: theme["background-basic-color-1"],

		color: () => theme["color-primary-default"],
		labelColor: () => theme["background-basic-color-900"],
		propsForDots: {
			r: "6",
			strokeWidth: "2",
			stroke: theme["background-basic-color-900"],
		},
	};

	return config;
};
