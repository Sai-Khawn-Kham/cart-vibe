import { ProductType, WishListType } from "@/type/ProductType";
import { create } from "zustand";

const useWishListStore = create<WishListType>()((set) => ({
  wishLists: [],
  addToWishList: (newWishList: ProductType) => set((state) => ({
    wishLists: [...state.wishLists, newWishList],
  })),
  removeFromWishList: (id: number) => set((state) => ({
    wishLists: state.wishLists.filter((el: ProductType) => el.id !== id)
  })),
}));

export default useWishListStore