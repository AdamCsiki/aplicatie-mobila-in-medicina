import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Logo from "../Logo/Logo";
import styles from "./Header.style";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constants/Colors";
import Menu from "../../screens/Menu/Menu";

function Header() {
	const [menuShown, setMenuShown] = useState(false);

	return (
		<LinearGradient
			colors={[Colors.mainColor, Colors.secondColor]}
			style={styles.Header}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
		>
			<Logo />

			<TouchableOpacity
				onPress={(e) => {
					setMenuShown(!menuShown);
				}}
				style={styles.ProfileContainer}
			>
				<Icon
					name="user-circle-o"
					size={40}
					color={"#fff"}
				/>
			</TouchableOpacity>

			<Menu shown={menuShown} />
		</LinearGradient>
	);
}

export default Header;
