import { createContext, useContext, useState } from "react";
import { defaultUser } from "../models/defaults";
import { User } from "../models/types";
import useAxios from "../hooks/useAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
	login: (userToken: string) => {},
	logout: () => {},
	user: defaultUser,
	userToken: "",
	setUserToken: (token: string) => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: { children: any }) {
	const [userToken, setUserToken] = useState("");
	const [user, setUser] = useState(defaultUser);

	const login = (userToken: string) => {
		setUserToken(userToken);
	};

	const logout = () => {
		setUserToken("");
	};

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				user,
				userToken,
				setUserToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
