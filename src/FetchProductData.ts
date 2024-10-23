import { Product } from './app/models/product';

export async function fetchProductData(): Promise<Product[]> {
    // Simulating an API call
    const response = await new Promise<Product[]>((resolve) => {
        setTimeout(() => {
            const products: Product[] = [
                new Product("T-Shirt", 200, "Clothing"),
                new Product("Jeans", 500, "Clothing"),
                new Product("Jacket", 1000, "Clothing"),
                new Product("Sweater", 400, "Clothing"),
                new Product("Shorts", 300, "Clothing"),
                new Product("Hat", 150, "Accessories"),
                new Product("Shoes", 600, "Footwear"),
                new Product("Scarf", 250, "Accessories"),
                new Product("Socks", 100, "Footwear"),
                new Product("Belt", 200, "Accessories")
            ];
            resolve(products);
        }, 1000);
    });

    // Log the fetched products
    console.log("Fetched Products:", response);
    
    return response;
}
