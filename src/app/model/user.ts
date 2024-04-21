import { create } from "zustand";

type State = {
	isAuth: boolean;
	token: string;
	email: string;
	name: string;
};

type Action = {
	setToken: (token: State["token"]) => void;
	setIsAuth: (isAuth: State["isAuth"]) => void;
	setName: (name: State["name"]) => void;
	setEmail: (email: State["email"]) => void;
};

export const useUserStore = create<State & Action>((set) => ({
	isAuth: false,
	token: "",
	email: "",
	name: "",
	setToken: (token) => set(() => ({ token: token })),
	setIsAuth: (isAuth) => set(() => ({ isAuth: isAuth })),
	setName: (name) => set(() => ({ name: name })),
	setEmail: (email) => set(() => ({ email: email })),
}));
