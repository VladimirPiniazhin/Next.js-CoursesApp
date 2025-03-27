/* eslint-disable */
import { TopPageModel } from "@/interfaces/page.interface";
import { ProductModel } from "@/interfaces/product.interface";

export interface PageComponentProps {
    page: TopPageModel;
    products: ProductModel[];
}