import { Image, View } from "react-native";
import styles from "./Logo.style";

function Logo() {
	return (
		<View style={styles.LogoContainer}>
			<Image
				style={styles.Logo}
				source={require("../../assets/icon.png")}
			></Image>
		</View>
	);
}

export default Logo;
