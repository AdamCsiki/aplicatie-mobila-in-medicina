import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Header from "../../../components/Header/Header";
import Profile from "../../../screens/Profile/Profile";

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
				component={Profile}
			/>
		</RootStackNav.Navigator>
	);
}

export default RootStack;
