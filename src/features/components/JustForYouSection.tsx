'use client'
import Container from "@/components/Container"
import useProductStore from "@/store/useProductStore";
import ProductCard from "./ProductCard";

const JustForYouSection = () => {
  const { products } = useProductStore();
  return (
    <Container className="my-14">
      <h2 className="text-2xl font-bold mb-3 capitalize">Just For You</h2>
      <div className="flex gap-5 overflow-auto hide-scroll-bar">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className="shrink-0" />
        ))}
      </div>
    </Container>
  )
}

export default JustForYouSection