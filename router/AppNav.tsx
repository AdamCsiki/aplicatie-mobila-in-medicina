import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import AuthStack from "./AuthStack/AuthStack";

function AppNav() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<NavigationContainer>
			<StatusBar
				hidden
				style="auto"
				animated={true}
			/>
			<AuthStack />
		</NavigationContainer>
	);
}

export default AppNav;
