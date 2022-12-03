import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import Colors from "../../constants/Colors";
import style from "./Drawer.style";
import Profile from "../../screens/Profile/Profile";
import { Image, Text, View } from "react-native";
import HomeTab from "../HomeTab/HomeTab";

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
						backgroundColor: Colors.black,

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

function ProfileDrawer() {
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

				drawerActiveTintColor: Colors.mainColor,
				drawerInactiveTintColor: Colors.white,
				drawerPosition: "right",
			}}
			detachInactiveScreens={true}
		>
			<Drawer.Screen
				name="MainPage"
				component={HomeTab}
			/>
			<Drawer.Screen
				name="Profile"
				component={Profile}
			/>
		</Drawer.Navigator>
	);
}

export { ProfileDrawer };
