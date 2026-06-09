'use client'
import BreadCrumb from "@/components/Breadcrumb"
import ProductDetailCard from "../components/ProductDetailCard"
import useProductStore from "@/store/useProductStore"
import ProductSection from "../components/ProductSection"

const ProductDetailPage = ({ details }: { details: string }) => {
  const { products } = useProductStore();
  const filteredProducts = products.filter((product) => product.path === details)[0];
  const justForYou = products.filter((product) => product.path !== details);
  return (
    <main>
      <BreadCrumb links={[{ path: "/products", title: "Products"}]} currentPageTitle={details} />
      <ProductDetailCard product={filteredProducts} />
      <ProductSection title={"Just For You"} products={justForYou} scrollContainer={true} />
    </main>
  )
}

export default ProductDetailPage

