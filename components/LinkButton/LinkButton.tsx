import style from "./LinkButton.style";
import { TouchableOpacity, Text } from "react-native";
import { NativeComponentType } from "react-native/Libraries/Utilities/codegenNativeComponent";
import { H6 } from "../../constants/TypeScale";

function LinkButton({
	children,
	buttonStyle,
	onPress,
}: {
	children?: any;
	buttonStyle?: any;
	onPress?: () => {};
}) {
	return (
		<TouchableOpacity
			style={[style().LinkButton, buttonStyle]}
			onPress={onPress}
		>
			<H6 style={style().linkButtonText}>{children}</H6>
		</TouchableOpacity>
	);
}

export default LinkButton;
