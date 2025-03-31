import { API } from "@/app/api";
import { ProductModel } from "@/interfaces/product.interface";
import { firstLevelMenu } from "@/helpers/helpers";
import { getMenu } from "./menu";

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
export async function getProductAll(category: string): Promise<ProductModel[] | null> {

    const res = await fetch(API.product.find, {
        method: 'POST',
        body: JSON.stringify({category, limit: 100}),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!res.ok) {
        return null;
    }
    const data = await res.json();
    return data || null;
}

export async function getAllProducts(limit: number = 5, offset: number = 0): Promise<ProductModel[]> {
    const allProducts: ProductModel[] = [];
    let productsFound = 0;

    for (const menuItem of firstLevelMenu) {
        if (productsFound >= limit + offset) break;
        
        const menu = await getMenu(menuItem.id);
        for (const item of menu) {
            if (productsFound >= limit + offset) break;

            for (const page of item.pages) {
                const products = await getProduct(page.category);
                if (products) {
                    allProducts.push(...products);
                    productsFound += products.length;
                }
                if (productsFound >= limit + offset) break;
            }
        }
    }

    return allProducts.slice(offset, offset + limit);
}
