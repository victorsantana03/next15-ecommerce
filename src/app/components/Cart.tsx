"use client";
import { useCartStore } from "@/store";
import { FiShoppingCart } from "react-icons/fi";

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
          2
        </span>
      </div>

      {useStore.isOpen && (
        <div
          className="fixed top-0 left-0 z-50 h-screen w-full bg-black/25"
          onClick={() => useStore.toggleCart()}
        >
          <div
            className="absolute top-0 right-0 h-screen w-1/3 overflow-y-scroll bg-slate-600 p-12"
            onClick={(e) => e.stopPropagation()}
          >
            <h1>Meu carrinho</h1>
            {useStore.cart.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
