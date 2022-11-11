import style from "./Menu.style";
import { Text, View } from "react-native";

function Menu({ shown }) {
	return (
		<View
			style={[
				style.Menu,
				{
					transform: [{ translateX: shown ? 0 : 600 }],
				},
			]}
		>
			<Text
				style={{
					color: style.Menu.color,
					textAlign: "center",
					fontSize: style.Menu.fontSize,
				}}
			>
				Menu
			</Text>
		</View>
	);
}

export default Menu;
