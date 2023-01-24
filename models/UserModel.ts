type UserModel = {
	username: string | null;
	image: string | null;
	email: string | null;
	password: string | null;
	roles: string[] | null;
};

export default UserModel;
