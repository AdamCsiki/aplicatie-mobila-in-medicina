import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Header from "../../components/Header/Header";
import { ProfileDrawer } from "../ProfileDrawer/ProfileDrawer";

const RootStackNav = createStackNavigator();

function RootStack() {
	return (
		<RootStackNav.Navigator
			screenOptions={{
				header: () => <Header />,
			}}
		>
			<RootStackNav.Screen
				name="root"
				component={ProfileDrawer}
			/>
		</RootStackNav.Navigator>
	);
}

export default RootStack;
