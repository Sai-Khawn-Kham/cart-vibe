export type ProductType = {
  id: number;
  name: string;
  src: string;
  path: string;
  status?: string;
  price: { original: number; discount: number | false };
  category: string;
  sizes: string[];
  variant?: string[]
}

export type ProductDataType = {
  products: ProductType[];
};

export type CategoryType = {
  categories: string[];
}

export type WishListType = {
  wishLists: ProductType[];
  addToWishList: (product: ProductType) => void;
  removeFromWishList: (id: number) => void;
  clearWishlist: () => void;
}

export type CartType = {
  id: number;
  productId: number;
  quantity: number;
}

export type CartDataType = {
  carts: CartType[];
  addToCart: (newCart: CartType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}