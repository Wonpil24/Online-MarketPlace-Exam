// Customer.ts
import { Product } from './app/models/product';

// Define the Customer interface
export interface Customer {
    name: string;
    email: string;
    orders: Product[];
}

export function getCustomerInfo(customer: Customer): void {
    console.log(`Name: ${customer.name}, Email: ${customer.email}, Orders Count: ${customer.orders.length}`);
}