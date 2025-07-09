"use client";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CheckoutButton = ({ totalPrice }: { totalPrice: number }) => {
  const cartStore = useCartStore();
  const { user } = useUser();
  const router = useRouter();

  const handleCheckout = async () => {
    if (!user) {
      cartStore.toggleCart();
      router.push("/sign-in");
      return;
    }
  };

  return (
    <div>
      <p className="font-bold text-teal-600">
        Total: {formatPrice(totalPrice)}
      </p>
      <button
        className="mt-2 w-full rounded-md bg-teal-600 py-2 text-white"
        onClick={() => cartStore.setCheckout("checkout")}
      >
        Finalizar Compra
      </button>
    </div>
  );
};

export default CheckoutButton;
