import Container from "@/components/Container";
import ProductCard from "./ProductCard";
import { ProductType } from "@/type/ProductType";

const ProductSection = ({title, products, scrollContainer = false} : {title: string, products: ProductType[], scrollContainer?: boolean }) => {
  return (
    <Container className="mb-14">
      <h2 className="text-2xl font-bold mb-3 capitalize">{title}</h2>
      <div className={`${scrollContainer ? "flex overflow-auto hide-scroll-bar" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} gap-5`}>
        <div className="hidden last:block sm:col-span-2 md:col-span-3 lg:col-span-4">
          <p className="text-gray-700 text-center py-5">There is no product in your wish list.</p>
        </div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} className={`${scrollContainer ? "shrink-0" : ""}`} />
        ))}
      </div>
    </Container>
  );
};

export default ProductSection;
