"use client";
import useCartStore from "@/store/useCartStore";
import useWishListStore from "@/store/useWishListStore";
import { ProductType } from "@/type/ProductType";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const ProductDetailCard = ({ product }: { product: ProductType}) => {
  const { wishLists, addToWishList, removeFromWishList } = useWishListStore();
  const { carts, addToCart } = useCartStore();
  const [ showImg, setShowImg] = useState(product.src);

  const variant = product.variant;

  const discount = product.price.discount;
  const original = product.price.original;

  const formatDiscount = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatOriginal = original.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const onMouseOverHandler = (p: string) => {
    setShowImg(p);
  };

  const handleAddToWishList = () => {
    if(wishLists.find((wishList) => wishList.id === product.id)){
      removeFromWishList(product.id);
      toast.success("Product removed from wish list");
    } else {
      addToWishList(product);
      toast.success("Product added to wish list");
    }
  }

  const handleAddToCart = () => {
    if(carts.find((cart) => cart.productId === product.id)){
      toast.error("Product already in cart");
    } else {
      addToCart({
        id: Date.now(),
        productId: product.id,
        quantity: 1
      });
      toast.success("Product added to cart");
    }
  }
  return (
    <div className="flex justify-center items-center mb-10">
      <div className="relative size-150">
        {variant && (
          <ul className="absolute z-10 top-1/2 -translate-y-1/2 -translate-x-10">
            {variant?.map((img, index) => (
              <li
                key={index}
                onMouseOver={() => onMouseOverHandler(img)}
                className="group w-40 h-40 mb-3 last:mb-0 flex justify-center items-center rounded-2xl bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50"
              >
                <img
                  className={`w-10/12 duration-500 ${product.category === "shoes" ? "group-hover:-rotate-45" : "group-hover:scale-115"}`}
                  src={img}
                />
              </li>
            ))}
          </ul>
        )}
        <div className="absolute top-0 right-0 w-130 h-full rounded-2xl px-14 py-10 flex flex-col items-center justify-between bg-white/20 shadow-lg shadow-black/5 border border-white/25 border-t-white/50 border-l-white/50">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <div
            onClick={handleAddToWishList}
            className="absolute top-2 right-2 border border-gray-50 hover:border-gray-500 active:border-cyan-500 rounded-lg text-gray-500 p-1 flex justify-center items-center cursor-pointer"
          >
            {wishLists.find((wishList) => wishList.id === product.id) ? (
              <BsHeartFill />
            ) : (
              <BsHeart />
            )}
          </div>
          <img
            className={`w-4/5 duration-500 ${product.category === "shoes" ? "hover:-rotate-12 hover:scale-120 hover:translate-x-2" : "hover:scale-115"}`}
            src={showImg}
          />
          <div className="flex flex-col gap-3">
            <ul className="flex justify-center items-center gap-2">
              <span className="font-bold">Size:</span>
              {product.sizes.map((size, index) => (
                <li key={index} className="bg-slate-50 font-bold px-2 rounded shadow-sm duration-300 hover:-translate-y-1 cursor-pointer">
                  {size}
                </li>
              ))}
            </ul>
            <p><span className="font-bold">Price: </span><span className={`${discount ? "line-through text-gray-500" : ""}`}>K{formatOriginal}</span> {discount && <span className="">K{formatDiscount}</span>}</p>
            <button onClick={handleAddToCart} className={`${carts.find((cart) => cart.productId === product.id) ? "bg-gray-800 text-gray-100" : "bg-gray-50"} font-bold px-6 py-2 rounded-full shadow-lg hover:tracking-wider cursor-pointer`}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
