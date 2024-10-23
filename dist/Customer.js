export function getCustomerInfo(customer) {
    console.log(`Customer Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Number of Orders: ${customer.orders.length}`);
}
