import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "@/types/ProductType";

type CartState = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: ProductType) => void;
  isOpen: boolean;
  toggleCart: () => void;
  onCheckout: string;
  setCheckout: (checkout: string) => void;
  paymentIntent: string;
  setPaymentIntent: (paymentIntent: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addProduct: (item) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === item.id);

          if (existingProduct) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity ? p.quantity + 1 : 1 };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: (item) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === item.id);

          if (existingProduct && existingProduct.quantity! > 1) {
            const updatedCart = state.cart.map((p) => {
              if (p.id === item.id) {
                return { ...p, quantity: p.quantity! - 1 };
              }
              return p;
            });
            return { cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter((p) => p.id !== item.id);
            return { cart: filteredCart };
          }
        }),

      isOpen: false,
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      onCheckout: "cart",
      setCheckout: (checkout) => set(() => ({ onCheckout: checkout })),
      paymentIntent: "",
      setPaymentIntent: (paymentIntent) => set(() => ({ paymentIntent })),
    }),
    { name: "cart-storage" },
  ),
);
