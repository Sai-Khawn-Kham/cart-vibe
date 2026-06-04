import CategorySection from "../components/CategorySection"
import ProductSection from "../components/ProductSection"

const ProductPage = ({activeCategory} : {activeCategory: string}) => {
  return (
    <>
      <CategorySection activeCategory={activeCategory} />
      <ProductSection activeCategory={activeCategory} />
    </>
  )
}

export default ProductPage