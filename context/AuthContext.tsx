import {
	createContext,
	SetStateAction,
	useContext,
	useEffect,
	useState,
} from "react";
import { defaultUser } from "../models/defaults";
import { User } from "../models/types";
import useAxios from "../hooks/useAxios";
import * as SecureStore from "expo-secure-store";

export const AuthContext = createContext({
	login: (email: string, password: string) => {},
	logout: () => {},
	userToken: "",
	setUserToken: (token: string) => {},
	user: defaultUser,
	setUser: (user: User) => {},
	getUser: (email: string, password: string) => {},
	error: "",
	setError: (error: string) => {},
});

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: { children: any }) {
	const [userToken, setUserToken] = useState("");
	const [user, setUser] = useState<User>(defaultUser);
	const [error, setError] = useState<string>("");
	const { axios } = useAxios();

	const login = (email: string, password: string) => {
		setUser(defaultUser);
		axios({
			method: "POST",
			url: "/auth/authenticate",
			data: { email: email, password: password },
		})
			.then((response) => {
				setUserToken(response.data.token);
				SecureStore.setItemAsync("token", response.data.token);
				SecureStore.setItemAsync("email", email);
				SecureStore.setItemAsync("pass", password);
			})
			.catch((err) => setError(err.message))
			.then(() => {
				getUser(email, password);
			});
	};

	const logout = () => {
		SecureStore.deleteItemAsync("token");
		SecureStore.deleteItemAsync("email");
		SecureStore.deleteItemAsync("pass");
		setUser(defaultUser);
		setUserToken("");
	};

	const getUser = (email: string, password: string) => {
		console.log("Current token: ", userToken);
		if (userToken) {
			return axios({
				method: "GET",
				url: "/users/userpass",
				data: { email: email, password: password },
				headers: { Authorization: `Bearer ${userToken}` },
			})
				.then((res) => {
					console.log(res.data);
					setUser(res.data);
				})
				.catch((err) => {
					console.log(err.message);
				});
		} else {
			console.log("No user token!");
		}
	};

	const isLoggedIn = async () => {
		const tempToken = await SecureStore.getItemAsync("token");
		let tempEmail = await SecureStore.getItemAsync("email");
		let tempPassword = await SecureStore.getItemAsync("password");

		if (tempToken && tempEmail && tempPassword) {
			setUserToken(tempToken);
		}
	};

	useEffect(() => {
		isLoggedIn();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				login,
				logout,
				userToken,
				setUserToken,
				user,
				setUser,
				getUser,
				error,
				setError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthProvider;
