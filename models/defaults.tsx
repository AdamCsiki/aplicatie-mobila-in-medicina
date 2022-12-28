import { User } from "./types";

export const defaultUser: User = {
	username: null,
	image: null,
	email: null,
	password: null,
	roles: ["ROLE_USER"],
	tokens: {
		accessToken: null,
		refreshToken: null,
	},
};
