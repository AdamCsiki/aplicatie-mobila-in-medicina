export type User = {
	username: string | null;
	image: string | null;
	email: string | null;
	password: string | null;
	roles: string[] | null;
	tokens: {
		accessToken: string | null;
		refreshToken: string | null;
	};
};
