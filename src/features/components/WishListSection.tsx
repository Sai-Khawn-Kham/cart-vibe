'use client'
import Container from "@/components/Container"
import useWishListStore from "@/store/useWishListStore"
import ProductCard from "./ProductCard";

const WishListSection = () => {
  const { wishLists } = useWishListStore();
  return (
    <Container className="mb-14">
      <h2 className="text-2xl font-bold mb-3 capitalize">Wish List Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <div className="hidden last:block sm:col-span-2 md:col-span-3 lg:col-span-4">
          <p className="text-gray-700 text-center py-5">There is no product in your wish list.</p>
        </div>
        {wishLists.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  )
}

export default WishListSection