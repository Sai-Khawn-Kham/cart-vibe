'use client'
import Container from "@/components/Container"
import useProductStore from "@/store/useProductStore";
import { ProductType } from "@/type/ProductType";
import ProductCard from "./ProductCard";

const NewProductSection = () => {
  const { products } = useProductStore();
  const newProducts: ProductType[] = products.filter((product: ProductType) => product.status === "new");
  return (
    <Container className="mt-14">
      <h2 className="text-2xl font-bold mb-3 capitalize">New Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {newProducts.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default NewProductSection