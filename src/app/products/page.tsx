

import ErrorMessage from "@/components/ErrorMessage";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";

export default async function Products() {
    let products: Product[] = [];

    try {
        products = await getProducts();
    } catch (error) {
        return <ErrorMessage message="Failed to load products." />;
    }

    return (
        <main className="container mx-auto px-4 py-10">

            <h1 className="text-3xl font-bold text-center mb-8">
                Our Products
            </h1>

            <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-6
      ">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </main>
    );
}