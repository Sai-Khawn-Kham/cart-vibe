"use client"
import useWishListStore from '@/store/useWishListStore';
import { ProductType } from '@/type/ProductType'
import { useRouter } from 'next/navigation';

const WishlistCard = ({product, handleWishlist}: {product: ProductType, handleWishlist: () => void}) => {
  const { removeFromWishList } = useWishListStore();
  const router = useRouter();

  const discount = product.price.discount;
  const original = product.price.original;

  const formatDiscount = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatOriginal = original.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleSeeMore = () => {
    router.push(`/products/${product.path}`);
    handleWishlist();
  }
  return (
    <div className="flex">
      <div className="w-32 h-36 border border-gray-400 rounded flex justify-center items-center">
        <img src={product.src} alt={product.name} className="w-10/12" />
      </div>
      <div className="flex flex-col justify-between p-3">
        <h3 className="text-lg font-medium font-serif">{product.name}</h3>
        <p className="">{discount ? formatDiscount : formatOriginal}MMK</p>
        <div className="flex gap-3 text-sm">
          <button onClick={() => removeFromWishList(product.id)} className="bg-gray-300 px-2 py-1 rounded">Remove</button>
          <button onClick={handleSeeMore} className="bg-gray-300 px-2 py-1 rounded">View Product</button>
        </div>
      </div>
    </div>
  )
}

export default WishlistCard