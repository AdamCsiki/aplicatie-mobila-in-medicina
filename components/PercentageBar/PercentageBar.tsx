import style from "./PercentageBar.style";
import { Layout, Text } from "@ui-kitten/components";

function PercentageBar({ percentage }: { percentage?: number }) {
	return (
		<Layout style={style().PercentageBarContainer}>
			<Layout
				style={[
					style().PercentageBar,
					{ width: percentage ? percentage + "%" : "0%" },
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
