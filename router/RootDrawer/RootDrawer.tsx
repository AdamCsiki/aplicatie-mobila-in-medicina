import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer, DrawerItem, IndexPath } from "@ui-kitten/components";
import RootStack from "../SIgnedInStack/SignedInStack";
import SettingsScreen from "../../screens/SettingsScreen/SettingsScreen";

const { Navigator, Screen } = createDrawerNavigator();

const DrawerContent = ({
	navigation,
	state,
}: {
	navigation: any;
	state: any;
}) => {
	return (
		<Drawer
			selectedIndex={new IndexPath(state.index)}
			onSelect={(index) =>
				navigation.navigate(state.routeNames[index.row])
			}
		>
			<DrawerItem title="Home" />
			<DrawerItem title="Settings" />
		</Drawer>
	);
};

function RootDrawer() {
	return (
		<Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			detachInactiveScreens={true}
			screenOptions={{
				drawerPosition: "right",
				headerShown: false,
			}}
		>
			<Screen
				name="Home"
				component={RootStack}
			/>
			<Screen
				name="Settings"
				component={SettingsScreen}
			/>
		</Navigator>
	);
}

export { RootDrawer };
