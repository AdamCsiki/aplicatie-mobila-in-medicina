import "react-native-gesture-handler";
import { Text, View } from "react-native";
import { useContext } from "react";

import { useFonts } from "expo-font";
import style from "./App.style";
import { ThemeProvider } from "./misc/ThemeProvider";

import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppNav from "./router/AppNav";

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
		<AuthProvider>
			<ThemeProvider>
				<AppNav />
			</ThemeProvider>
		</AuthProvider>
	);
}
