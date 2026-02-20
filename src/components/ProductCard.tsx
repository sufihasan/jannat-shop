import Link from "next/link";
import { Product } from "@/types/product";
import Image from "next/image";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Link href={`/products/${product.id}`}>
            <div className="border rounded-lg p-4 hover:shadow-lg transition h-full flex flex-col">

                <div className="flex justify-center items-center h-40">
                    <Image
                        src={product.image}
                        alt={product.title}
                        className="h-full object-contain"
                        fill
                    />
                </div>

                <h2 className="mt-4 font-semibold line-clamp-2">
                    {product.title}
                </h2>

                <p className="text-blue-600 font-bold mt-2">
                    ${product.price}
                </p>

                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                </p>
            </div>
        </Link>
    );
}