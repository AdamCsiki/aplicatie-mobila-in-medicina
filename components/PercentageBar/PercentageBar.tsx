import style from "./PercentageBar.style";
import { Layout, Text } from "@ui-kitten/components";

function PercentageBar({
	percentage,
	color,
}: {
	percentage?: number;
	color?: string;
}) {
	return (
		<Layout
			style={style().PercentageBarContainer}
			level="1"
		>
			<Layout
				style={[
					style().PercentageBar,
					{ width: percentage ? percentage + "%" : "0%" },
					color ? { backgroundColor: color } : undefined,
				]}
			></Layout>
			<Text
				category="c2"
				style={style().PercentageBarText}
			>
				{percentage + "%"}
			</Text>
		</Layout>
	);
}

export default PercentageBar;
