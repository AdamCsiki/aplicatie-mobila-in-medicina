import { LoginModel } from "./LoginModel";
import { SignUpModel } from "./SignUpModel";
import UserModel from "./UserModel";

export type AuthContextModel = {
	user: UserModel | null;
	login: (loginForm: LoginModel) => void;
	signUp: (signUpForm: SignUpModel) => void;
	logout: () => void;
	error?: any;
};
