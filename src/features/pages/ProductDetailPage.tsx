import BreadCrumb from "@/components/Breadcrumb"
import JustForYouSection from "../components/JustForYouSection"
import ProductDetailCard from "../components/ProductDetailCard"

const ProductDetailPage = ({ details }: { details: string }) => {
  return (
    <>
      <BreadCrumb links={[{ path: "/products", title: "Products"}]} currentPageTitle={details} />
      <ProductDetailCard details={details} />
      <JustForYouSection details={details} />
    </>
  )
}

export default ProductDetailPage