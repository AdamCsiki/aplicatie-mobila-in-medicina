import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RDrawer } from "./routes/Drawer/Drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { useFonts } from "expo-font";
import style from "./App.style";

import styles from "./App.style";
import Header from "./components/Header/Header";

export default function App() {
	const [loaded] = useFonts({
		DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
	});

	if (!loaded) {
		return (
			<View style={style.App}>
				<Text>Loading fonts :D</Text>
			</View>
		);
	}

	return (
		<View style={style.App}>
			<NavigationContainer>
				<Header />
				<StatusBar style="auto" />
				<RDrawer />
			</NavigationContainer>
		</View>
	);
}
