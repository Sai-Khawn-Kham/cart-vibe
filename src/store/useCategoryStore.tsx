import { CategoryType } from "@/type/ProductType";
import { create } from "zustand";

const useCategoryStore = create<CategoryType>((set) => ({
  categories: ["sweatshirts", "hoodies", "shirts", "shoes"],
}))

export default useCategoryStore