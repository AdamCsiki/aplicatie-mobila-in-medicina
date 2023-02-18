import style from "./LoginScreen.style";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useAuth } from "../../context/AuthContext";
import LinkButton from "../../components/LinkButton/LinkButton";
import { Layout, Button, Text, Input, useTheme } from "@ui-kitten/components";
import { LoginModel } from "../../models/LoginModel";
import useAxios from "../../hooks/useAxios";

function LoginScreen({ navigation }: { navigation: any }) {
	const theme = useTheme();
	const { axios } = useAxios();

	const { login, error } = useAuth();
	const [customError, setCustomError] = useState("");

	const [formData, setFormData] = useState<LoginModel>({
		email: "",
		password: "",
	});

	const submitLogin = () => {
		setCustomError("");

		if (
			formData.email.trim().length == 0 ||
			formData.password.trim().length == 0
		) {
			setCustomError("Email or password missing!");
			return;
		}

		login(formData);
	};

	return (
		<KeyboardAwareScrollView
			style={{
				...style.Login,
				backgroundColor: theme["color-basic-100"],
			}}
			contentContainerStyle={style.LoginContainer}
		>
			<Layout style={style.loginHeaderContainer}>
				<Text category="h2">Login</Text>
			</Layout>

			<Layout style={style.loginInputContainer}>
				<Input
					style={style.loginInput}
					placeholder="email"
					onChangeText={(text) => {
						setFormData({ ...formData, email: text });
					}}
				/>
				<Input
					style={style.loginInput}
					placeholder="password"
					onChangeText={(text) => {
						setFormData({ ...formData, password: text });
					}}
				/>
				<LinkButton buttonStyle={style.loginInput}>
					Can't sign in?
				</LinkButton>
				{customError && <Text category="danger">{customError}</Text>}
			</Layout>
			<Layout style={style.loginButtonContainer}>
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
