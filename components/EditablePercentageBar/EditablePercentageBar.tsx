import style from "./EditablePercentageBar.style";
import { Layout } from "@ui-kitten/components";
import { useState } from "react";
import PercentageBar from "../PercentageBar/PercentageBar";

function EditablePercentageBar({ percentage }: { percentage: number }) {
	const [currentPercentage, setCurrentPercentage] = useState(0);

	return (
		<Layout style={style().EditablePercentageBar}>
			<PercentageBar percentage={percentage} />
		</Layout>
	);
}

export default EditablePercentageBar;
