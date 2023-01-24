import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "../../components/Header/Header";
import Profile from "../../screens/Profile/Profile";

const RootStackNav = createStackNavigator();
const RootBottomTabNav = createBottomTabNavigator();

function RootStack() {
	return (
		<RootBottomTabNav.Navigator
			screenOptions={{
				header: () => <Header />,
			}}
		>
			<RootStackNav.Screen
				name="root"
				component={Profile}
			/>
		</RootBottomTabNav.Navigator>
	);
}

export default RootStack;
