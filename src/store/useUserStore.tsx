import { UserType } from "@/type/UserType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create<UserType>()(persist((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}), {
  name: "user-store",
  storage: createJSONStorage(() => localStorage),
}));

export default useUserStore;