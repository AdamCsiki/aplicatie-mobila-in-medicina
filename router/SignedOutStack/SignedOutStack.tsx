import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/LoginScreen/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen/RegisterScreen";

const SignedOut = createStackNavigator();

function SignedOutStack() {
	return (
		<SignedOut.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<SignedOut.Screen
				name="Login"
				component={LoginScreen}
			/>
			<SignedOut.Screen
				name="Register"
				component={RegisterScreen}
			/>
		</SignedOut.Navigator>
	);
}

export default SignedOutStack;
