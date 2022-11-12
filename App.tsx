import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { RDrawer } from "./components/Drawer/Drawer";

import styles from "./App.style";
import Header from "./components/Header/Header";
import HomeNavigator from "./routes/homeStack";

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaView style={styles.container}>
				<StatusBar style="auto" />
				<RDrawer />
			</SafeAreaView>
		</NavigationContainer>
	);
}
