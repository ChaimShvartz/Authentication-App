import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TokenStoreType {
    token: string | null;
    setToken: (token: string) => void;
    clearToken: () => void;
}
export const UseTokenStore = create<TokenStoreType>()(
    persist(
        (set) => ({
            token: null,
            setToken: (token: string) => set((prev) => ({ ...prev, token })),
            clearToken: () => set((prev) => ({ ...prev, token: null })),
        }),
        { name: "token" },
    ),
);
