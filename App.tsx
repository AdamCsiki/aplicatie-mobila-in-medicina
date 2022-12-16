import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { useFonts } from "expo-font";
import style from "./App.style";
import { ThemeProvider } from "./misc/ThemeProvider";

import styles from "./App.style";
import Header from "./components/Header/Header";
import RootStack from "./router/stacks/RootStack/RootStack";

export default function App() {
	const [loaded] = useFonts({
		DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
		Bauhaus: require("./assets/fonts/BauhausRegular.ttf"),
	});

	if (!loaded) {
		return (
			<View style={style.App}>
				<Text>Loading fonts :D</Text>
			</View>
		);
	}

	return (
		<ThemeProvider>
			<View style={style.App}>
				<NavigationContainer>
					<StatusBar style="auto" />
					<RootStack />
				</NavigationContainer>
			</View>
		</ThemeProvider>
	);
}
