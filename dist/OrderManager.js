export class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    getAllOrders() {
        return this.orders;
    }
}
