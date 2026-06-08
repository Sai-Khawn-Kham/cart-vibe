'use client'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import Container from "./Container"
import Link from "next/link"
import useCategoryStore from "@/store/useCategoryStore"

const Footer = () => {
  const {categories} = useCategoryStore();
  const filteredCategories = categories.filter((category) => category !== "all");
  return (
    <footer className="mt-auto">
      <div className="bg-white/10 py-10">
        <Container className="flex justify-between">
          <div className="">
            <Link href="/">
              <h3 className="text-2xl font-bold font-serif mb-3">Cart Vibe</h3>
            </Link>
            <div className="flex gap-3">
              <FaFacebook className="size-6" />
              <FaInstagram className="size-6" />
              <FaTwitter className="size-6" />
              <FaYoutube className="size-6" />
            </div>
          </div>
          <div className="space-x-10 flex">
            <div className="">
              <h3 className="text-lg font-semibold mb-3">Products</h3>
              <p className="text-gray-500">
                {filteredCategories.map((category, index) => (
                  <span key={index}>
                    <a href={`/products?category=${category.toLowerCase()}`} className="capitalize hover:underline">
                      {category}
                    </a>
                    {index !== filteredCategories.length - 1 && " | "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white/20 text-gray-600 text-center py-1.5 px-3">
        ©2026 Cart Vibe. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer