import { API } from "@/app/api";
import { ProductModel } from "@/interfaces/product.interface";

export async function getProduct(category: string): Promise<ProductModel[] | null> {

    const res = await fetch(API.product.find, {
        method: 'POST',
        body: JSON.stringify({category, limit: 10}),
        headers: {
            'Content-Type': 'application/json',
        },
        next: {
            revalidate: 10,
        },
    });
    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data || null;
}
