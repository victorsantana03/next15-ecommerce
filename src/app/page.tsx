import { ProductType } from "@/types/ProductType";
import Product from "./components/Product";
import Stripe from "stripe";

async function getProducts(): Promise<ProductType[]> {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
  });

  const products = await stripe.products.list();
  const formatedProducts = await Promise.all(
    products.data.map(async (product) => {
      const price = await stripe.prices.list({
        product: product.id,
      });
      return {
        id: product.id,
        price: price.data[0].unit_amount,
        name: product.name,
        image: product.images[0],
        description: product.description,
        currency: price.data[0].currency,
      };
    }),
  );

  return formatedProducts;
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="mx-auto max-w-7xl p-8 xl:px-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
