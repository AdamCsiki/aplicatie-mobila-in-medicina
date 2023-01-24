import { createContext, useContext, useEffect, useState } from "react";
import defaultUser from "../models/defaultUser";
import useAxios from "../hooks/useAxios";
import * as SecureStore from "expo-secure-store";
import { AuthContextModel } from "../models/AuthContextModel";

import store from "./store";
import { SignUpModel } from "../models/SignUpModel";
import { LoginModel } from "../models/LoginModel";
import useStore from "./store";

export const AuthContext = createContext<AuthContextModel>(
	{} as AuthContextModel
);

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: { children: any }) {
	const [userToken, setUserToken] = useState("");
	const [user, setUser] = useState(null);
	const [error, setError] = useState<string>("");
	const { axios } = useAxios();

	const login = (loginForm: LoginModel) => {
		axios({
			method: "POST",
			url: "/auth/login",
			data: { email: loginForm.email, password: loginForm.password },
		})
			.then((response) => {
				SecureStore.setItemAsync("token", response.data.token);
				SecureStore.setItemAsync(
					"refreshToken",
					response.data.refreshToken
				);
				setUserToken(response.data.token);
				useStore.setState({
					userToken: response.data.token,
					refreshToken: response.data.refreshToken,
				});
			})
			.catch((err) => setError(err.message));
	};

	const signUp = (signUpForm: SignUpModel) => {
		axios({
			method: "POST",
			url: "/auth/signup",
			data: signUpForm,
		}).then((response) => {});
	};

	const getUserToken = (refreshToken: string) => {
		axios({
			method: "GET",
			url: "auth/refresh",
			data: { refreshToken: refreshToken },
		}).then((response) => {});
	};

	const logout = () => {
		SecureStore.deleteItemAsync("token");
		SecureStore.deleteItemAsync("refreshToken");
		setUserToken("");
	};

	const isLoggedIn = async () => {
		const tempToken = await SecureStore.getItemAsync("token");

		if (tempToken) {
			setUserToken(tempToken);
		}
	};

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				signUp,
				logout,
				error,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
