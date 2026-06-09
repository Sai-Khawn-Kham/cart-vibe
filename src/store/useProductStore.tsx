import { ProductDataType } from "@/type/ProductType";
import { create } from "zustand";

const useProductStore = create<ProductDataType>(() => ({
  products: [
    {
      id: 1,
      name: "Aye Say Pal Sweatshirt",
      src: "/assets/ayeSayPal(calmEdition).png",
      path: "aye-say-pal-sweatshirt",
      status: "you-may-like",
      price: { original: 35000, discount: false },
      category: "sweatshirts",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Aye Say Pal Hoodies",
      src: "/assets/ayeSayPal(original).png",
      path: "aye-say-pal-hoodies",
      status: "you-may-like",
      price: { original: 40000, discount: false },
      category: "hoodies",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Aye Say Pal Shirt",
      src: "/assets/ayeSayPal(shirt).png",
      path: "aye-say-pal-shirt",
      status: "you-may-like",
      price: { original: 35000, discount: false },
      discount: false,
      category: "shirts",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 4,
      name: "Nike Air Zoom",
      src: "/assets/shoes1.png",
      path: "nike-air-zoom",
      status: "new",
      price: { original: 30000, discount: 24000 },
      category: "shoes",
      sizes: ["S", "M", "L", "XL"],
      variant: ["/assets/shoes1.png", "/assets/shoes2.png", "/assets/shoes3.png"],
    },
    {
      id: 7,
      name: "Classic Comfort Shirt",
      src: "/assets/classicComfortShirt.png",
      path: "classic-comfort-shirt",
      status: "trend",
      price: { original: 40000, discount: false },
      category: "shirts",
      sizes: ["S", "M", "L", "XL"],
      variant: ["/assets/classicComfortShirt.png", "/assets/boldVibeTee.png", "/assets/chillModeGraphicTee.png"],
    },
  ],
}));

export default useProductStore;
