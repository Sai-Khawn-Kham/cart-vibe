"use client"
import useProductStore from "@/store/useProductStore";
import CategorySection from "../components/CategorySection"
import ProductSection from "../components/ProductSection"
import BreadCrumb from "@/components/Breadcrumb"

const ProductPage = ({activeCategory} : {activeCategory: string}) => {
  const { products } = useProductStore();
  const filteredProducts = activeCategory === 'all' ? products : products.filter((product) => product.category === activeCategory);
  return (
    <main>
      <BreadCrumb currentPageTitle="Products" />
      <CategorySection activeCategory={activeCategory} />
      <ProductSection title={"Products"} products={filteredProducts} />
    </main>
  )
}

export default ProductPage