import { CartDataType, CartType } from "@/type/ProductType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useCartStore = create<CartDataType>()(persist((set) => ({
  carts: [],
  addToCart: (newCart: CartType) => set((state) => ({
    carts: [...state.carts, newCart],
  })),
  increaseQuantity: (id: number) => set((state) => ({
    carts: state.carts.map((cart) => cart.id === id ? {...cart, quantity: cart.quantity + 1} : cart)
  })),
  decreaseQuantity: (id: number) => set((state) => ({
    carts: state.carts.map((cart) => cart.id === id ? {...cart, quantity: cart.quantity - 1} : cart)
  })),
  removeFromCart: (id: number) => set((state) => ({
    carts: state.carts.filter((el: CartType) => el.id !== id)
  })),
  clearCart: () => set({ carts: [] }),
}), {
  name: "cart-store",
  storage: createJSONStorage(() => localStorage),
}));

export default useCartStore