import "react-native-gesture-handler";
import { useContext, useState } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";

import AuthProvider, { AuthContext } from "./context/AuthContext";

import style from "./App.style";
import AppNav from "./router/AppNav";

import { default as light_theme } from "./constants/light_theme.json";
import { default as dark_theme } from "./constants/dark_theme.json";
import { default as mapping } from "./constants/mapping.json";

export default function App() {
	const [theme, useTheme] = useState("light");
	const [loaded] = useFonts({
		DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
		DMSans_bold: require("./assets/fonts/DMSans-Bold.ttf"),
		Bauhaus: require("./assets/fonts/BauhausRegular.ttf"),
	});

	if (!loaded) {
		return (
			<View style={style().AppLoading}>
				<Text>Loading fonts :D</Text>
			</View>
		);
	}

	return (
		<ApplicationProvider
			{...eva}
			theme={
				theme == "light"
					? { ...eva.light, ...light_theme }
					: { ...eva.dark }
			}
			customMapping={{ ...eva.mapping, ...mapping }}
		>
			<AuthProvider>
				<Layout style={style().App}>
					<AppNav />
				</Layout>
			</AuthProvider>
		</ApplicationProvider>
	);
}
