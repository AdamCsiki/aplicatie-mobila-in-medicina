import { TouchableOpacity } from "react-native";
import styles from "./Button.style";

function Button({ children, onPress = {}, style = {} }) {
	return (
		<TouchableOpacity
			style={[styles.Button, style]}
			onPress={onPress}
		>
			{children}
		</TouchableOpacity>
	);
}

export default Button;
