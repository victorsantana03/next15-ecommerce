"use client";

import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import Image from "next/image";

const CartDrawer = () => {
  const useStore = useCartStore();
  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-full bg-black/25"
      onClick={() => useStore.toggleCart()}
    >
      <div
        className="absolute top-0 right-0 h-screen w-1/3 overflow-y-scroll bg-slate-600 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="text-sm font-bold text-teal-600">
          Voltar para loja
        </button>
        <div className="my-4 border-t border-gray-400"></div>
        {useStore.cart.map((item) => (
          <div key={item.id} className="flex gap-4 py-4">
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="w-24 object-cover"
            />
            <div>
              <h2 className="w-42 truncate">{item.name}</h2>
              <h2>Quantidade: {item.quantity}</h2>
              <p className="text-sm font-bold text-teal-600">
                {formatPrice(item.price)}
              </p>
              <button
                className="mt-2 mr-1 cursor-pointer rounded-md border px-2 py-1 text-sm"
                onClick={() => useStore.addProduct(item)}
              >
                Adicionar
              </button>
              <button
                className="mt-2 cursor-pointer rounded-md border px-2 py-1 text-sm"
                onClick={() => useStore.removeProduct(item)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartDrawer;
