import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import style from "./RootDrawer.style";
import { Image, Text, View } from "react-native";
import RootStack from "../RootStack/RootStack";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: any) => {
	return (
		<DrawerContentScrollView
			style={style.Drawer}
			contentContainerStyle={{
				paddingTop: 0,
			}}
			{...props}
		>
			<View style={style.DrawerHeader}>
				<View
					style={{
						width: 110,
						height: 125,

						paddingTop: 5,

						borderTopLeftRadius: 150,
						borderTopRightRadius: 150,

						display: "flex",
						justifyContent: "flex-start",
						alignItems: "center",

						overflow: "hidden",
					}}
				>
					<Image
						source={require("../../assets/horseprofile.jpeg")}
						style={{
							height: 100,
							width: 100,

							borderRadius: 150,
						}}
					/>
				</View>
			</View>
			<DrawerItemList {...props} />
		</DrawerContentScrollView>
	);
};

function RootDrawer() {
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerStyle: style.Drawer,
				drawerItemStyle: {
					width: "100%",
				},

				drawerLabelStyle: { padding: 0 },
				drawerPosition: "right",
			}}
			detachInactiveScreens={true}
		>
			<Drawer.Screen
				name="Home"
				component={RootStack}
			/>
		</Drawer.Navigator>
	);
}

export { RootDrawer };
