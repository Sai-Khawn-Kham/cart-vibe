'use client'
import React from 'react'
import useWishListStore from "@/store/useWishListStore";
import { HiOutlineHeart, HiX } from "react-icons/hi"
import WishlistCard from "./WishlistCard";
import toast from 'react-hot-toast';

const WishlistSidebar = ({handleWishlist}: {handleWishlist: () => void}) => {
  const { wishLists, clearWishlist } = useWishListStore();

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const handleClearWishlist = () => {
    clearWishlist();
    toast.success("Wishlist cleared");
    handleWishlist();
  }

  const handleContinueShopping = () => {
    handleWishlist();
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
      <div className="grow space-y-3 p-3">
        <div className="hidden last:block">There is no product in your wish list.</div>
        {wishLists.map((product) => (
          <WishlistCard key={product.id} product={product} handleWishlist={handleWishlist} />
        ))}
      </div>
      <div className="border-t border-gray-500 p-3">
        <div className="flex justify-between">
          <button onClick={handleClearWishlist} className="border border-gray-500 rounded-full px-3 py-1.5 cursor-pointer">Clear Wishlist</button>
          <button onClick={handleContinueShopping} className="bg-gray-500 rounded-full px-3 py-1.5 cursor-pointer">Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default WishlistSidebar