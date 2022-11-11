import { Image, View } from "react-native";
import styles from "./Logo.style";
import logoImage from "../../assets/icon.png";

function Logo() {
	return (
		<View style={styles.LogoContainer}>
			<Image
				style={styles.Logo}
				source={logoImage}
			></Image>
		</View>
	);
}

export default Logo;
