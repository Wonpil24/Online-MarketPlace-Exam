import { Product } from './app/models/product';

const products: Product[] = [
    new Product('T-Shirt', 25, 'Clothing'),
    new Product('Jeans', 50, 'Clothing'),
    new Product('Jacket', 100, 'Clothing'),
    new Product('Sweater', 80, 'Clothing'),
];

// Filter products priced above 100
const expensiveProducts = products.filter(product => product.price > 100);

// Map to create an array of product names
const productNames = products.map(product => product.name);

// Reduce to calculate the total price of all products
const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

console.log("Expensive Products:", expensiveProducts);
console.log("Product Names:", productNames);
console.log("Total Price:", totalPrice);