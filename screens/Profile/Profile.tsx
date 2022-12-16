import { View, ScrollView, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { H1, H2, Span } from "../../constants/TypeScale";
import { useTheme } from "../../misc/ThemeProvider";
import style from "./Profile.style";

function Profile() {
	const {
		dark,
		colors,
		setScheme,
	}: { dark?: any; colors?: any; setScheme?: any } = useTheme();

	const toggleTheme = () => {
		dark ? setScheme("light") : setScheme("dark");
	};

	return (
		<ScrollView
			contentContainerStyle={[
				style.Profile,
				{ backgroundColor: colors.background },
			]}
		>
			<Switch
				value={dark}
				onValueChange={toggleTheme}
			/>
			<Span>Hello</Span>
		</ScrollView>
	);
}

export default Profile;
