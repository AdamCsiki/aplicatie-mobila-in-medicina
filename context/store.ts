import { create } from "zustand";
import UserModel from "../models/UserModel";

interface StateModel {
	user: UserModel | null;
	setUser: (user: UserModel) => void;
	removeUser: () => void;
	userToken: string | null;
	setUserToken: (userToken: string) => void;
	removeToken: () => void;
	refreshToken: string | null;
	setRefreshToken: (refreshToken: string) => void;
	removeRefreshToken: () => void;
}

const useStore = create<StateModel>((set) => ({
	user: null,
	setUser: (user: UserModel) => set(() => ({ user: user })),
	removeUser: () => set(() => ({ user: null })),
	userToken: null,
	setUserToken: (userToken: string) => set(() => ({ userToken })),
	removeToken: () => set(() => ({ userToken: null })),
	refreshToken: null,
	setRefreshToken: (refreshToken: string) =>
		set(() => ({ refreshToken: refreshToken })),
	removeRefreshToken: () => set(() => ({ refreshToken: null })),
}));

export default useStore;
