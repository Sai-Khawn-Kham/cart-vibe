export type ProductType = {
  id: number;
  name: string;
  src: string;
  path: string;
  status?: string;
  price: { original: number; discount: number | false };
  category: string;
  sizes: string[];
}

export type ProductDataType = {
  products: ProductType[];
};

export type CategoryType = {
  categories: string[];
}