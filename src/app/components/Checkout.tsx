import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: }),
    });
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
};

export default Checkout;
