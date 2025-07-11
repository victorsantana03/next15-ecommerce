import { fetchProducts } from "./actions";
import Product from "./components/Product";

export default async function Home() {
  const { formatedProducts } = await fetchProducts({});
  return (
    <div className="mx-auto max-w-7xl p-8 xl:px-0">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-6"></div>
    </div>
  );
}
