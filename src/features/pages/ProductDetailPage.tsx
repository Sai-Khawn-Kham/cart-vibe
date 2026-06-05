import JustForYouSection from "../components/JustForYouSection"
import ProductDetailCard from "../components/ProductDetailCard"

const ProductDetailPage = ({ details }: { details: string }) => {
  return (
    <>
      <ProductDetailCard details={details} />
      <JustForYouSection />
    </>
  )
}

export default ProductDetailPage