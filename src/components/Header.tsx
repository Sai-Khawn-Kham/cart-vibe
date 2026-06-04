"use client"
import Link from "next/link";
import Container from "./Container";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";

const Header = () => {
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
            <li>
              <Link href="/cart" className="hover:underline">Cart</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul className="flex gap-2">
            <li>
              <HiOutlineHeart className="size-8 hover:border border-gray-500 rounded-full p-1" />
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
    </header>
  );
};

export default Header;