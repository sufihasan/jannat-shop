import { getProduct } from "@/lib/api";
import { Product } from "@/types/product";
import Image from "next/image";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: Props) {
    const { id } = await params;

    // If fetch fails, Next.js shows error.tsx automatically
    const product: Product = await getProduct(id);

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center items-center">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="text-gray-600">Category: {product.category}</p>
                    <p className="text-2xl font-semibold text-blue-600">
                        ${product.price}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </div>
            </div>
        </div>
    );
}