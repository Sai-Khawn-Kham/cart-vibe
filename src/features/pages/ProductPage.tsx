import CategorySection from "../components/CategorySection"
import ProductSection from "../components/ProductSection"
import BreadCrumb from "@/components/Breadcrumb"

const ProductPage = ({activeCategory} : {activeCategory: string}) => {
  return (
    <>
      <BreadCrumb currentPageTitle="Products" />
      <CategorySection activeCategory={activeCategory} />
      <ProductSection activeCategory={activeCategory} />
    </>
  )
}

export default ProductPage