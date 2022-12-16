import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatNavigation from "../ChatStack/ChatNavigation";
import Home from "../../screens/Home/HomeScreen";
import Colors from "../../constants/Colors";
import { Image, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { scales } from "../../constants/TypeScale";
import { useState } from "react";

const Tab = createBottomTabNavigator();

function HomeTab() {
	const [chatNotificationCount, setChatNotificationCount] = useState(0);

	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: Colors.black,

					borderWidth: 0.5,
					borderColor: Colors.white,
					borderRadius: 20,
					shadowColor: Colors.white10,

					margin: 10,
					padding: 5,

					position: "absolute",
				},

				tabBarActiveTintColor: Colors.mainColor,
				tabBarInactiveTintColor: Colors.white,
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="home"
								color={
									focused ? Colors.mainColor : Colors.white
								}
								size={scales.h5}
							/>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Chats"
				component={ChatNavigation}
				options={{
					tabBarIcon: ({ focused }) => (
						<View>
							<Icon
								name="comment"
								color={
									focused ? Colors.mainColor : Colors.white
								}
								size={scales.h5}
							/>
						</View>
					),
					tabBarBadge: chatNotificationCount,
					// tabBarStyle: {
					// 	display: "none",
					// },
				}}
			/>
		</Tab.Navigator>
	);
}

export default HomeTab;
