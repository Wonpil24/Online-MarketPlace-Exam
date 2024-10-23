import { Product } from './product';
export class DiscountedProduct extends Product {
    constructor(name, price, category, discountRate) {
        super(name, price, category);
        this.discountRate = discountRate;
    }
    getProductInfo() {
        const discountedPrice = this.price * (1 - this.discountRate / 100);
        return `Product: ${this.name}, Price: $${discountedPrice.toFixed(2)} (Discount: ${this.discountRate}%), Category: ${this.category}`;
    }
}
