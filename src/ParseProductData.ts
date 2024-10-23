import { Product } from './app/models/product';

export function parseProductData(jsonData: string): Product[] | string {
    try {
        return JSON.parse(jsonData);
    } catch (error) {
        return "Error parsing product data: Invalid JSON format.";
    }
}

