import useCartStore from "@/store/useCartStore";
import useProductStore from "@/store/useProductStore";
import { CartType } from "@/type/ProductType";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi";

const CartCard = ({ cart, handleCart }: { cart: CartType, handleCart: () => void }) => {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();

  const showProduct = products.find((product) => product.id === cart.productId);

  const discount = showProduct?.price.discount;
  const original = showProduct?.price.original;
  const price = discount ? discount : original!;
  const total = price * cart.quantity;

  const formatDiscount = discount?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatOriginal = original?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleDecrease = () => {
    if(cart.quantity > 1) {
      decreaseQuantity(cart.id);
    } else {
      toast.error("Product quantity cannot be less than 1");
    }
  }

  const handleIncrease = () => {
    increaseQuantity(cart.id);
  }

  const handleRemoveFromCart = () => {
    removeFromCart(cart.id);
    toast.success("Product removed from cart");
  }
  return (
    <div className="flex">
      <div className="w-24 h-27 border border-gray-400 rounded flex justify-center items-center">
        <img src={showProduct?.src} alt={showProduct?.name} className="w-11/12" />
      </div>
      <div className="grow flex flex-col justify-between p-3">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium font-serif line-clamp-1">{showProduct?.name}</h3>
          <button onClick={handleRemoveFromCart} className="cursor-pointer">
            <HiTrash className="size-5 text-red-500" />
          </button>
        </div>
        <div className="flex justify-between items-center gap-2 text-sm">
          <p className="text-gray-600">{discount ? formatDiscount : formatOriginal}MMK</p>
          <div className="">
            <button onClick={handleDecrease} className="bg-gray-400 rounded px-1.5 cursor-pointer">-</button>
            <span className="px-1">{cart.quantity}</span>
            <button onClick={handleIncrease} className="bg-gray-400 rounded px-1.5 cursor-pointer">+</button>
          </div>
          <p>{total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}MMK</p>
        </div>
      </div>
    </div>
  )
}

export default CartCard