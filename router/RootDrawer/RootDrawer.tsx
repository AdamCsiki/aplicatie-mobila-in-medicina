import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import {
	Drawer,
	DrawerItem,
	Icon,
	IndexPath,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";
import RootStack from "../RootStack/RootStack";
import Header from "../../components/Header/Header";

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
		</Drawer>
	);
};

function DrawerNavigator() {
	return (
		<Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			detachInactiveScreens={true}
			screenOptions={{
				drawerPosition: "right",
				header: () => <Header />,
			}}
		>
			<Screen
				name="Home"
				component={RootStack}
			/>
		</Navigator>
	);
}

function RootDrawer() {
	return <DrawerNavigator />;
}

export { RootDrawer };
