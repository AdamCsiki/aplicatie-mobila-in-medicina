import { createStackNavigator } from "@react-navigation/stack";
import DietScreen from "../../screens/DietScreen/DietScreen";
import DietAddScreen from "../../screens/DietAddScreen/DietAddScreen";

const { Navigator, Screen } = createStackNavigator();

function DietStack() {
	return (
		<Navigator>
			<Screen
				name="DietScreen"
				component={DietScreen}
				options={{ headerShown: false }}
			/>
			<Screen
				name="Foods"
				component={DietAddScreen}
				options={{ headerShown: true }}
			/>
		</Navigator>
	);
}

export default DietStack;
