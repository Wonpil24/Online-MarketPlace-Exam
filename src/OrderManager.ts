import { Product } from './app/models/product';

export class OrderManager<T> {
    private orders: T[] = [];

    public addOrder(order: T): void {
        this.orders.push(order);
    }

    public getAllOrders(): T[] {
        return this.orders;
    }
}
