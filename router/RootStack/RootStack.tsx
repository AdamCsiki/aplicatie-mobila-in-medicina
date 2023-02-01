import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/ProfileScreen/Profile";
import DietScreen from "../../screens/DietScreen/DietScreen";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";

const RootStackNav = createStackNavigator();
const RootBottomTabNav = createBottomTabNavigator();

const BottomTabBar = ({
	navigation,
	state,
}: {
	navigation: any;
	state: any;
}) => (
	<BottomNavigation
		selectedIndex={state.index}
		onSelect={(index) => navigation.navigate(state.routeNames[index])}
	>
		<BottomNavigationTab title="Profile" />
		<BottomNavigationTab title="Diet" />
	</BottomNavigation>
);

function RootStack() {
	return (
		<RootBottomTabNav.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={BottomTabBar}
		>
			<RootStackNav.Screen
				name="Profile"
				component={Profile}
			/>
			<RootStackNav.Screen
				name="Diet"
				component={DietScreen}
			/>
		</RootBottomTabNav.Navigator>
	);
}

export default RootStack;
