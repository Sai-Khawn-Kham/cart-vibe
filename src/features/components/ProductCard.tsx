'use client'
import useWishListStore from "@/store/useWishListStore";
import { ProductType } from "@/type/ProductType";
import Link from "next/link";
import toast from "react-hot-toast";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const ProductCard = ({ product, className = "" }: { product: ProductType, className?: string }) => {
  const { wishLists, addToWishList, removeFromWishList } = useWishListStore();

  const discount = product.price.discount;
  const original = product.price.original;

  const formatDiscount = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatOriginal = original.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleAddToWishList = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(wishLists.find((wishList) => wishList.id === product.id)){
      removeFromWishList(product.id);
      toast.success("Product removed from wish list");
    } else {
      addToWishList(product);
      toast.success("Product added to wish list");
    }
  }
  return (
    <div className={`${className} relative w-58 h-83 group bg-white/25 rounded-lg shadow-lg border border-white/25 hover:border-white`}>
      <div
        onClick={handleAddToWishList}
        className="absolute top-2 right-2 z-10 border border-gray-50 hover:border-gray-500 rounded-lg text-gray-500 p-1 flex justify-center items-center cursor-pointer"
      >
        {wishLists.find((wishList) => wishList.id === product.id) ? (
          <BsHeartFill />
        ) : (
          <BsHeart />
        )}
      </div>
      <Link href={`/products/${product.path}`} className="inline-block h-full">
        <div className="h-full flex flex-col gap-3 justify-between p-5">
          <div className="grow flex justify-center items-center">
            <img src={product.src} alt={product.path} className={`${product.category === "shoes" ? "group-hover:-rotate-45" : "group-hover:scale-115"} duration-500`} />
          </div>
          <div className="">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p><span className={`${discount ? "line-through text-gray-500" : ""}`}>K{formatOriginal}</span> {discount && <span className="">K{formatDiscount}</span>}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
