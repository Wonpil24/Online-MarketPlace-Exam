export class Product {
    private static productCount = 0;
    public name: string;
    public price: number;
    public category: string;

    constructor(name: string, price: number, category: string) {
        this.name = name;
        this.price = price;
        this.category = category;
        Product.productCount++;
    }

    public updatePrice(newPrice: number): void {
        this.price = newPrice;
    }

    public getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }

    public static totalProducts(): number {
        return Product.productCount;
    }
}
