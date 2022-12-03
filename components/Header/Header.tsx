import style from "./Header.style";
import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import Logo from "../Logo/Logo";
import Icon from "react-native-vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigation, DrawerActions } from "@react-navigation/native";

function Header() {
	const navigation = useNavigation();

	return (
		<View style={style.Header}>
			{/* <SearchInput /> */}
			<TouchableOpacity
				onPress={(e) => {
					navigation.dispatch(DrawerActions.toggleDrawer);
				}}
			>
				<Icon
					name="bars"
					size={40}
					color={Colors.black}
				/>
			</TouchableOpacity>
		</View>
	);
}

export default Header;
