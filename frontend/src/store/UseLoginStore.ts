import { create } from "zustand";

interface UserLoginType {
    login: boolean;
    toggleLogin: (login: boolean) => void;
}

export const UseLoginStore = create<UserLoginType>((set) => ({
    login: false,
    toggleLogin: (login: boolean) => set((prev) => ({ ...prev, login })),
}));
