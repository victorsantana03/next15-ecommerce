"use client";
import { useCartStore } from "@/store";
import { FiShoppingCart } from "react-icons/fi";
import CartDrawer from "./CartDrawer";

const Cart = () => {
  const useStore = useCartStore();
  return (
    <>
      <div
        className="relative flex cursor-pointer items-center"
        onClick={useStore.toggleCart}
      >
        <FiShoppingCart />
        <span className="absolute bottom-3 left-3 h-5 w-5 rounded-full bg-teal-600 text-center text-sm font-bold">
          {useStore.cart.length}
        </span>
      </div>

      {useStore.isOpen && <CartDrawer />}
    </>
  );
};

export default Cart;
