export class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
        Product.productCount++;
    }
    updatePrice(newPrice) {
        this.price = newPrice;
    }
    getProductInfo() {
        return `Product: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
    }
    static totalProducts() {
        return Product.productCount;
    }
}
Product.productCount = 0;
