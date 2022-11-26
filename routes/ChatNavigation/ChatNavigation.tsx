import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import Colors from "../../constants/Colors";
import ChatList from "../../screens/ChatList/ChatList";
import Chat from "../../screens/Chat/Chat";

const Stack = createStackNavigator();

function ChatNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.mainColor,
				},
				headerTitleStyle: {
					color: Colors.black,
				},
			}}
		>
			<Stack.Screen
				name="ChatList"
				component={ChatList}
				options={{
					headerTitle: "All",
				}}
			/>
			<Stack.Screen
				name="Chat"
				component={Chat}
				options={{
					headerTitle: "FuckGoBack",
				}}
			/>
		</Stack.Navigator>
	);
}

export default ChatNavigation;
