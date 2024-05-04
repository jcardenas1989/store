import { Category } from "./category.model";

export interface Product {
    id: number;
    title: string;
    descripction: string;
    price: number;
    images: string[];
    creationAt: string;
    category:Category;
}