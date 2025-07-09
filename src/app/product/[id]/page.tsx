import ProductImage from "@/app/components/ProductImage";
import AddCart from "../../components/AddCart";
import Stripe from "stripe";
import { formatPrice } from "@/lib/utils";

type ProductPageProps = {
  params: {
    id: string;
  };
};

async function getProduct(id: string) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-05-28.basil",
  });
  const produto = await stripe.products.retrieve(id);
  const price = await stripe.prices.list({
    product: produto.id,
  });

  return {
    id: produto.id,
    price: price.data[0].unit_amount,
    name: produto.name,
    image: produto.images[0],
    description: produto.description,
    currency: price.data[0].currency,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const product = await getProduct(id);
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 p-10 md:flex-row">
      <ProductImage product={product} />
      <div className="flex flex-col">
        <div className="pb-4">
          <h1 className="text-2xl font-bold text-gray-300">{product.name}</h1>
          <h2 className="text-xl font-bold text-teal-600">
            {formatPrice(product.price)}
          </h2>
        </div>
        <div className="pb-4">
          <p className="text-sm text-gray-400">{product.description}</p>
        </div>
        <AddCart product={product} />
      </div>
    </div>
  );
}
