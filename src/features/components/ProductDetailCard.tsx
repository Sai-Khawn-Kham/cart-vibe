"use client";
import useProductStore from "@/store/useProductStore";
import useWishListStore from "@/store/useWishListStore";
import { ProductType } from "@/type/ProductType";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const ProductDetailCard = ({ details }: { details: string }) => {
  const { products } = useProductStore();
  const { wishLists, addToWishList, removeFromWishList } = useWishListStore();
  const filteredProducts = products.filter((product) => product.path === details);
  const [showProduct, setShowProduct] = useState(filteredProducts[0]);

  const onMouseOverHandler = (p: ProductType) => {
    setShowProduct(p);
  };

  const handleAddToWishList = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(wishLists.find((wishList) => wishList.id === showProduct.id)){
      removeFromWishList(showProduct.id);
      toast.success("Product removed from wish list");
    } else {
      addToWishList(showProduct);
      toast.success("Product added to wish list");
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div className="relative size-150">
        <ul className="absolute z-10 top-1/2 -translate-y-1/2">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onMouseOver={() => onMouseOverHandler(product)}
              className="group w-40 h-40 mb-2 flex justify-center items-center rounded-2xl bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50"
            >
              <img
                className={`w-10/12 duration-500 ${product.category === "shoes" ? "group-hover:-rotate-45" : "group-hover:scale-115"}`}
                src={product.src}
              />
            </li>
          ))}
        </ul>
        <div className="absolute top-0 right-0 w-130 h-full rounded-2xl px-14 py-10 pl-20 flex flex-col items-center justify-between bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50">
          <h2 className="text-2xl font-bold">{showProduct?.name}</h2>
          <div
            onClick={handleAddToWishList}
            className="absolute top-2 right-2 border border-gray-50 hover:border-gray-500 active:border-cyan-500 rounded-lg text-gray-500 p-1 flex justify-center items-center"
          >
            {wishLists.find((wishList) => wishList.id === showProduct.id) ? (
              <BsHeartFill />
            ) : (
              <BsHeart />
            )}
          </div>
          <img
            className={`w-4/5 duration-300 ${showProduct.category === "shoes" ? "hover:-rotate-12 hover:scale-130 hover:translate-x-2" : "hover:scale-115"}`}
            src={showProduct?.src}
          />
          <ul className="flex justify-center items-center gap-3">
            <span className="font-bold">Size</span>
            {showProduct?.sizes.map((size, index) => (
              <li key={index} className="bg-slate-50 font-bold px-2 rounded shadow-sm duration-300 hover:-translate-y-1 cursor-pointer">
                {size}
              </li>
            ))}
          </ul>
          <button className="bg-gray-50 font-bold px-6 py-2 rounded-full shadow-lg hover:tracking-wider">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
