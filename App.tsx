import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RDrawer } from "./components/Drawer/Drawer";
import { useFonts } from "expo-font";

import styles from "./App.style";
import Header from "./components/Header/Header";
import HomeNavigator from "./routes/homeStack";

export default function App() {
	const [fontsLoaded] = useFonts({
		Bauhaus: require("./assets/fonts/BauhausRegular.ttf"),
		DMSans: require("./assets/fonts/DMSans-Regular.ttf"),
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading fonts...</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<RDrawer />
			</SafeAreaView>
		</NavigationContainer>
	);
}
