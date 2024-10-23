import { Product } from './app/models/product';

export class DiscountedProduct extends Product {
    public discountRate: number;

    constructor(name: string, price: number, category: string, discountRate: number) {
        super(name, price, category);
        this.discountRate = discountRate;
    }

    public getProductInfo(): string {
        const discountedPrice = this.price - (this.price * this.discountRate / 100);
        return `Product: ${this.name}, Price: $${this.price}, Discount: ${this.discountRate}%, Final Price: $${discountedPrice.toFixed(2)}, Category: ${this.category}`;
    }
}
