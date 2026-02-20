export async function getProducts() {
    const res = await fetch("https://fakestoreapi.com/products", {
        next: { revalidate: 60 * 60 }, // cache for 60 seconds
    });

    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }

    return res.json();
}


export async function getProduct(id: string) {
    const res = await fetch(
        `https://fakestoreapi.com/products/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch product");
    }

    return res.json();
}