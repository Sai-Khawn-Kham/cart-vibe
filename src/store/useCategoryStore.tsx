import { CategoryType } from "@/type/ProductType";
import { create } from "zustand";

const useCategoryStore = create<CategoryType>((set) => ({
  categories: ["all", "sweatshirts", "hoodies", "shirts", "shoes"],
}))

export default useCategoryStore