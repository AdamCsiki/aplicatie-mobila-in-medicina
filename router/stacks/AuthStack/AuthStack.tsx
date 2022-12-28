import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { Text, View } from "react-native";
import LoginScreen from "../../../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../../../screens/RegisterScreen/RegisterScreen";

const Auth = createStackNavigator();

function AuthStack() {
	return (
		<Auth.Navigator>
			<Auth.Screen
				name="Login"
				component={LoginScreen}
			/>
			<Auth.Screen
				name="Register"
				component={RegisterScreen}
			/>
		</Auth.Navigator>
	);
}

export default AuthStack;
