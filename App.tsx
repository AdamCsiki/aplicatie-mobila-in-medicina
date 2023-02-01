import "react-native-gesture-handler";
import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

import { useFonts } from "expo-font";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import { IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import AuthProvider, { AuthContext } from "./context/AuthContext";

import style from "./App.style";
import AppNav from "./router/AppNav";

import { default as customTheme } from "./themes/custom-theme.json";
import { default as mapping } from "./themes/mapping.json";

function App() {
	const [theme, setTheme] = useState("light");

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
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider
				{...eva}
				theme={{ ...eva.light, ...customTheme }}
				customMapping={{ ...eva.mapping, ...mapping }}
			>
				<AuthProvider>
					<Layout
						style={style().App}
						level="1"
					>
						<AppNav />
					</Layout>
				</AuthProvider>
			</ApplicationProvider>
		</>
	);
}

export default App;
