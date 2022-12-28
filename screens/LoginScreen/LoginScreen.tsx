import style from "./LoginScreen.style";
import { useContext, useState } from "react";
import {
	KeyboardAvoidingView,
	ScrollView,
	Switch,
	Text,
	TextInput,
	View,
} from "react-native";
import InputField from "../../components/InputField/InputField";
import { AuthContext, useAuth } from "../../context/AuthContext";
import { User } from "../../models/types";
import { useTheme } from "../../misc/ThemeProvider";
import Button from "../../components/Button/Button";
import { ErrorSpan, H6 } from "../../constants/TypeScale";
import LoginSvg from "../../components/LoginSvg/LoginSvg";
import LinkButton from "../../components/LinkButton/LinkButton";
import useAxios from "../../hooks/useAxios";

function LoginScreen() {
	const { userToken } = useAuth();

	const { response, error, loading, fetchData } = useAxios();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitLogin = () => {
		fetchData(
			"auth/authenticate",
			"POST",
			{
				email: email,
				password: password,
			},
			{
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers":
					"Origin, X-Requested-With, Content-Type, Accept",
				"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
			}
		);
	};

	return (
		<KeyboardAvoidingView
			style={style().Login}
			behavior="padding"
		>
			<ScrollView contentContainerStyle={style().LoginContainer}>
				<LoginSvg />
				<View style={style().loginInputContainer}>
					<InputField
						placeholder="Email"
						textContentType="emailAddress"
						autoCorrect={false}
						autoCapitalize="none"
						onChangeText={(e) => setEmail(e)}
					/>
					<InputField
						placeholder="Password"
						textContentType="password"
						secureTextEntry={true}
						autoCorrect={false}
						autoCapitalize="none"
						onChangeText={(e) => setPassword(e)}
					/>
					<LinkButton>Can't sign in?</LinkButton>
					<ErrorSpan>{error}</ErrorSpan>
				</View>
				<Button
					onPress={() => {
						submitLogin();
						console.log(response);
					}}
				>
					<H6>Login</H6>
				</Button>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;
