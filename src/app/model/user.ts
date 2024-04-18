import { create } from "zustand";

type State = {
	isAuth: boolean;
	token: string;
};

type Action = {
	setToken: (token: State["token"]) => void;
	setIsAuth: (isAuth: State["isAuth"]) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useUserStore = create<State & Action>((set) => ({
	isAuth: false,
	token: "",
	setToken: (token) => set(() => ({ token: token })),
	setIsAuth: (isAuth) => set(() => ({ isAuth: isAuth })),
}));
