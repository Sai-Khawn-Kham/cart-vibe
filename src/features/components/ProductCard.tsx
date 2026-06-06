import { ProductType } from "@/type/ProductType";
import Link from "next/link";

const ProductCard = ({ product, className = "" }: { product: ProductType, className?: string }) => {
  const discount = product.price.discount;
  const original = product.price.original;
  const formatDiscount = discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatOriginal = original.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className={`${className} w-58 h-83 group bg-white/25 rounded-lg shadow-lg border border-white/25 hover:border-white`}>
      <Link href={`/products/${product.path}`} className="inline-block h-full">
        <div className="h-full flex flex-col gap-3 justify-between p-5">
          <div className="grow flex justify-center items-center">
            <img src={product.src} alt={product.path} className={`${product.category === "shoes" ? "group-hover:-rotate-45" : "group-hover:scale-120"} duration-300`} />
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
