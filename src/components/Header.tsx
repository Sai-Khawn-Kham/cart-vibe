"use client"
import Link from "next/link";
import Container from "./Container";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import useWishListStore from "@/store/useWishListStore";
import WishlistSidebar from "./WishlistSidebar";
import { useState } from "react";

const Header = () => {
  const { wishLists } = useWishListStore();
  const [ openWishlist, setOpenWishlist ] = useState(false);

  const handleWishlist = () => setOpenWishlist(!openWishlist);
  return (
    <header className="sticky top-0 z-50">
      <Container className="flex justify-between items-center py-4 bg-gray-300 rounded shadow-xl border border-white/25">
        <Link href="/" className="text-3xl font-semibold font-serif">
          Cart Vibe
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-2">
            <li onClick={handleWishlist} className="relative">
              <HiOutlineHeart className="size-8 hover:border border-gray-500 rounded-full p-1 cursor-pointer" />
              {wishLists.length > 0 && (
                <span className="text-[10px] absolute -top-0.5 -right-0.5 bg-gray-700 text-white rounded-full px-1">{wishLists.length}</span>
              )}
            </li>
            <li>
              <HiOutlineShoppingBag className="size-8 hover:border border-gray-500 rounded-full p-1" />
            </li>
            <li>
              <BsPerson className="size-8 hover:border border-gray-500 rounded-full p-1" />
            </li>
          </ul>
        </div>
      </Container>
      <div onClick={handleWishlist} className={`${openWishlist ? "block" : "hidden"} absolute w-full h-screen top-0 z-100 bg-black/50`}>
        <WishlistSidebar handleWishlist={handleWishlist} />
      </div>
    </header>
  );
};

export default Header;