import { createStackNavigator } from "@react-navigation/stack";
import SignedInStack from "../SIgnedInStack/SignedInStack";
import SignedOutStack from "../SignedOutStack/SignedOutStack";
import {useAuth} from "../../context/AuthContext";

const Auth = createStackNavigator();

function AuthStack() {
	const {store} = useAuth();
	
	return (
		<Auth.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Auth.Screen name="SignedOut" component={SignedOutStack} />
			<Auth.Screen
				name="SignedIn"
				component={SignedInStack}
			/>
		</Auth.Navigator>
	);
}

export default AuthStack;
