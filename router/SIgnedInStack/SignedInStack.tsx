import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/ProfileScreen/Profile";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import DietStack from "../DietStack/DietStack";

const SignedInStackNav = createStackNavigator();
const SignedInBottomTabNav = createBottomTabNavigator();

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

function SignedInStack() {
	return (
		<SignedInBottomTabNav.Navigator
			screenOptions={{
				headerShown: false,
			}}
			tabBar={BottomTabBar}
		>
			<SignedInStackNav.Screen
				name="Profile"
				component={Profile}
			/>
			<SignedInStackNav.Screen
				name="Diet"
				component={DietStack}
			/>
		</SignedInBottomTabNav.Navigator>
	);
}

export default SignedInStack;
