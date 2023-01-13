import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { defaultUser } from "../models/defaults";
import AuthStack from "../router/stacks/AuthStack/AuthStack";
import RootStack from "./stacks/RootStack/RootStack";

function AppNav() {
	const { userToken, user } = useContext(AuthContext);
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		console.log("User: ", user);
		console.log("Default: ", defaultUser);
		console.log(user.email != defaultUser.email);
		setLoggedIn(user.email != defaultUser.email);
	}, [user]);

	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			{loggedIn ? <RootStack /> : <AuthStack />}
		</NavigationContainer>
	);
}

export default AppNav;
