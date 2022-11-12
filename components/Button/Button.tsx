import { TouchableOpacity } from "react-native";
import styles from "./Button.style";

function Button({
	children,
	onPress,
	style = {},
}: {
	children?: any;
	onPress?: any;
	style?: Object;
}) {
	return (
		<TouchableOpacity
			style={[styles.Button, style]}
			activeOpacity={0.5}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
}

export default Button;
