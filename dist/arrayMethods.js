import { Product } from './product';
const products = [
    new Product('T-Shirt', 25, 'Clothing'),
    new Product('Jeans', 50, 'Clothing'),
    new Product('Jacket', 100, 'Clothing'),
    new Product('Sweater', 80, 'Clothing'),
];
const expensiveProducts = products.filter(product => product.price > 30);
console.log('Products priced above $30:', expensiveProducts);
const productNames = products.map(product => product.name);
console.log('Product Names:', productNames);
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log('Total Price of Products:', totalPrice);
