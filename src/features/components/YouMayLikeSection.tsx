"use client";
import Container from "@/components/Container";
import useProductStore from "@/store/useProductStore";
import { ProductType } from "@/type/ProductType";
import ProductCard from "./ProductCard";

const YouMayLikeSection = () => {
  const { products } = useProductStore();
    const youMayLike: ProductType[] = products.filter((product: ProductType) => product.status === "you-may-like");
  return (
    <Container className="my-14">
      <h2 className="text-2xl font-bold mb-3 capitalize">You May Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {youMayLike.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default YouMayLikeSection