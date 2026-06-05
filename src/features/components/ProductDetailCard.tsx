"use client";
import useProductStore from "@/store/useProductStore";
import { ProductType } from "@/type/ProductType";
import { useState } from "react";

const ProductDetailCard = ({ details }: { details: string }) => {
  const { products } = useProductStore();
  const filteredProducts = products.filter((product) => product.path === details);
  const [showProduct, setShowProduct] = useState(filteredProducts[0]);

  const onMouseOverHandler = (p: ProductType) => {
    setShowProduct(p);
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative size-[600px]">
        <ul className="absolute z-10 top-1/2 -translate-y-1/2">
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onMouseOver={() => onMouseOverHandler(product)}
              className="group w-40 h-40 mb-2 flex justify-center items-center rounded-2xl bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50"
            >
              <img
                className={`w-10/12 duration-500 ${product.category === "shoes" ? "group-hover:-rotate-45" : "group-hover:scale-120"}`}
                src={product.src}
              />
            </li>
          ))}
        </ul>
        <div className="absolute top-0 right-0 w-130 h-full rounded-2xl px-14 py-10 pl-20 flex flex-col items-center justify-between bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50">
          <h2 className="text-2xl font-bold">{showProduct?.name}</h2>
          <img
            className={`w-4/5 duration-300 ${showProduct.category === "shoes" ? "hover:-rotate-45 hover:translate-x-5" : "hover:scale-115"}`}
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
