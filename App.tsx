import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import styles from "./App.style";
import Header from "./components/Header/Header";
import HomeNavigator from "./routes/homeStack";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Header />
			<HomeNavigator />
		</SafeAreaView>
	);
}
