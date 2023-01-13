import style from "./LoginScreen.style";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import InputField from "../../components/InputField/InputField";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button/Button";
import { ErrorSpan, H2, H5 } from "../../constants/TypeScale";
import LinkButton from "../../components/LinkButton/LinkButton";

function LoginScreen() {
	const { login, error, getUser } = useAuth();
	const [customError, setCustomError] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitLogin = () => {
		if (email.trim().length == 0 || password.trim().length == 0) {
			setCustomError("Email or password missing!");
			return;
		}
		login(email.trim(), password.trim());
		getUser(email.trim(), password.trim());
		setCustomError(error);
	};

	return (
		<KeyboardAvoidingView
			style={style().Login}
			behavior="padding"
		>
			<ScrollView contentContainerStyle={style().LoginContainer}>
				<View style={style().loginHeaderContainer}>
					<H2
						bold
						style={style().loginHeader}
					>
						Login
					</H2>
				</View>

				<View style={style().loginInputContainer}>
					<InputField
						placeholder="Email"
						containerStyle={style().loginInput}
						textContentType="emailAddress"
						autoCorrect={false}
						autoCapitalize="none"
						onChangeText={(e) => setEmail(e)}
					/>
					<InputField
						placeholder="Password"
						containerStyle={style().loginInput}
						textContentType="password"
						secureTextEntry={true}
						autoCorrect={false}
						autoCapitalize="none"
						onChangeText={(e) => setPassword(e)}
					/>
					<LinkButton buttonStyle={style().loginInput}>
						Can't sign in?
					</LinkButton>
					<ErrorSpan>{customError}</ErrorSpan>
				</View>
				<View style={style().loginButtonContainer}>
					<Button
						style={style().loginButton}
						onPress={() => {
							submitLogin();
						}}
					>
						<H5 bold>Back</H5>
					</Button>
					<Button
						style={style().loginButton}
						onPress={() => {
							submitLogin();
						}}
					>
						<H5 bold>Login</H5>
					</Button>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

export default LoginScreen;
