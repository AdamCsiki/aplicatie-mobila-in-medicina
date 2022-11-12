import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";

const screens = {
	Home: {
		screen: Home,
	},
	Profile: {
		screen: Profile,
	},
};

const HomeStack = createStackNavigator(screens);

console.log(createAppContainer(HomeStack));

export default createAppContainer(HomeStack);
