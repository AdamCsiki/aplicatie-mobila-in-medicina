import style from "./LoginScreen.style";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../context/AuthContext";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Layout, Button, Text, Input } from "@ui-kitten/components";

function LoginScreen() {
	const { login, error } = useAuth();
	const [customError, setCustomError] = useState("");

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitLogin = () => {
		setCustomError("");

		if (email.trim().length == 0 || password.trim().length == 0) {
			setCustomError("Email or password missing!");
			return;
		}
		setCustomError(error);
	};

	return (
		<KeyboardAwareScrollView
			style={style().Login}
			contentContainerStyle={style().LoginContainer}
		>
			<Layout style={style().loginHeaderContainer}>
				<Text category="h2">Login</Text>
			</Layout>

			<Layout style={style().loginInputContainer}>
				<Input
					style={style().loginInput}
					placeholder="email"
				/>
				<Input
					style={style().loginInput}
					placeholder="password"
				/>
				<LinkButton buttonStyle={style().loginInput}>
					Can't sign in?
				</LinkButton>
				{customError && <Text category="danger">{customError}</Text>}
			</Layout>
			<Layout style={style().loginButtonContainer}>
				<Button
					onPress={() => {
						submitLogin();
					}}
				>
					<Text>Button</Text>
				</Button>
			</Layout>
		</KeyboardAwareScrollView>
	);
}

export default LoginScreen;
