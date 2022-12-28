import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AuthStack from "../router/stacks/AuthStack/AuthStack";
import RootStack from "./stacks/RootStack/RootStack";

function AppNav() {
	const { userToken } = useContext(AuthContext);

	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			{userToken !== "" ? <RootStack /> : <AuthStack />}
		</NavigationContainer>
	);
}

export default AppNav;
