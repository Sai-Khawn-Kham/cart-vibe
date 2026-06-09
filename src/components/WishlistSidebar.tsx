'use client'
import useWishListStore from "@/store/useWishListStore";
import { HiOutlineHeart, HiX } from "react-icons/hi"
import WishlistCard from "./WishlistCard";

const WishlistSidebar = ({handleWishlist}: {handleWishlist: () => void}) => {
  const { wishLists } = useWishListStore();

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }
  return (
    <div onClick={stopPropagation} className="absolute right-0 w-100 h-full bg-gray-200 flex flex-col">
      <div className="flex justify-between items-center border-b border-gray-400 p-3">
        <div className="flex gap-2 items-center">
          <HiOutlineHeart className="size-6" />
          <h2 className="text-xl font-serif">Your Wishlist</h2>
          <p className="bg-gray-400 px-1.5 rounded-full text-sm">{wishLists.length}</p>
        </div>
        <div className="cursor-pointer" onClick={handleWishlist}>
          <HiX className="size-6" />
        </div>
      </div>
      <div className="space-y-3 p-3">
        <div className="hidden last:block">There is no product in your wish list.</div>
        {wishLists.map((product) => (
          <WishlistCard key={product.id} product={product} handleWishlist={handleWishlist} />
        ))}
      </div>
    </div>
  )
}

export default WishlistSidebar