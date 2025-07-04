"use client";

import { useCartStore } from "@/store";
import { ProductType } from "@/types/ProductType";

export default function Product({ product }: { product: ProductType }) {
  const { addProduct } = useCartStore();

  return (
    <button
      className="cursor-pointer rounded-md bg-teal-600 px-3.5 py-2.5 text-center text-sm text-white"
      onClick={() => addProduct(product)}
    >
      Adicionar ao carrinho
    </button>
  );
}
