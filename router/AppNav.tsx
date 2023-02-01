import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { RootDrawer } from "./RootDrawer/RootDrawer";

function AppNav() {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<NavigationContainer>
			<StatusBar
				hidden
				style="auto"
				animated={true}
			/>
			<RootDrawer />
		</NavigationContainer>
	);
}

export default AppNav;
