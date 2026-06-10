'use client'
import React from 'react'
import useCartStore from "@/store/useCartStore"
import { HiOutlineShoppingBag, HiX } from 'react-icons/hi';
import CartCard from '@/components/CartCard';
import useProductStore from '@/store/useProductStore';
import toast from 'react-hot-toast';

const CartSidebar = ({ handleCart }: { handleCart: () => void }) => {
  const { carts, clearCart } = useCartStore();
  const { products } = useProductStore();

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  const total = carts.reduce((pv, cv) => {
    const product = products.find((product) => product.id === cv.productId);
    const discount = Number(product?.price.discount);
    const original = Number(product?.price.original);
    
    const price = discount ? discount : original;
    const cost = price * cv.quantity;
    const totalCost = pv + cost;
    return totalCost;
  }, 0)

  const tax = total * 0.05;
  const netTotal = total + tax;

  const handleOrder = () => {
    clearCart();
    toast.success("Order placed successfully");
  }
  return (
    <div onClick={stopPropagation} className="absolute right-0 w-100 h-full bg-gray-200 flex flex-col">
      <div className="flex justify-between items-center border-b border-gray-400 p-3">
        <div className="flex gap-2 items-center">
          <HiOutlineShoppingBag className="size-6" />
          <h2 className="text-xl font-serif">Your Cart</h2>
          <p className="bg-gray-400 px-1.5 rounded-full text-sm">{carts.length}</p>
        </div>
        <div className="cursor-pointer" onClick={handleCart}>
          <HiX className="size-6" />
        </div>
      </div>
      <div className="grow space-y-3 p-3">
        <div className="hidden last:block">There is no product in your cart.</div>
        {carts.map((cart) => (
          <CartCard key={cart.id} cart={cart} handleCart={handleCart} />
        ))}
      </div>
      <div className="border-t border-gray-500 px-2 py-4">
        <div className="flex justify-end gap-10 text-right">
          <div>
            <p className="text-gray-500">Total</p>
            <p className="font-semibold">{total}</p>
          </div>
          <div>
            <p className="text-gray-500">Tax</p>
            <p className="font-semibold">{tax}</p>
          </div>
          <div>
            <p className="text-gray-500">Net Total</p>
            <p className="font-semibold">{netTotal}</p>
          </div>
        </div>
        <div className="text-end mt-3">
          <button onClick={handleOrder} className="bg-gray-700 text-gray-50 py-1 px-2 rounded">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default CartSidebar