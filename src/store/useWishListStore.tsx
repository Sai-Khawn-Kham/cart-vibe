import { ProductType, WishListType } from "@/type/ProductType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useWishListStore = create<WishListType>()(persist((set) => ({
  wishLists: [],
  addToWishList: (newWishList: ProductType) => set((state) => ({
    wishLists: [...state.wishLists, newWishList],
  })),
  removeFromWishList: (id: number) => set((state) => ({
    wishLists: state.wishLists.filter((el: ProductType) => el.id !== id)
  })),
}), {
  name: "wish-list-store",
  storage: createJSONStorage(() => localStorage),
}));

export default useWishListStore