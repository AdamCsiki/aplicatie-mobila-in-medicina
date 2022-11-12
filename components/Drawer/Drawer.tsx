import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import Colors from "../../constants/Colors";
import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";

const Drawer = createDrawerNavigator();

function RDrawer() {
	const dimensions = useWindowDimensions();
	const isLargeScreen = dimensions.width >= 768;

	return (
		<Drawer.Navigator
			screenOptions={{
				drawerStyle: {
					backgroundColor: Colors.white,
					width: isLargeScreen ? 0 : "90%",
				},
				drawerType: "slide",
			}}
			detachInactiveScreens={true}
		>
			<Drawer.Screen
				name="Home"
				component={Home}
			/>
			<Drawer.Screen
				name="Profile"
				component={Profile}
			/>
		</Drawer.Navigator>
	);
}

export { RDrawer };
