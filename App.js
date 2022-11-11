import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";

import styles from "./App.style";
import Header from "./components/Header/Header";
import Home from "./screens/Home/Home";

export default function App() {
	console.log("miau");
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Header />
			<Home />
		</SafeAreaView>
	);
}
