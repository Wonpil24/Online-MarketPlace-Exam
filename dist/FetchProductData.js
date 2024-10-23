export async function fetchProductData() {
    try {
        // Simulating fetching data from an external API
        const productData = {
            name: 'T-Shirt',
            price: 25,
            category: 'Clothing'
        };
        console.log('Product Data:', productData);
        return productData;
    }
    catch (error) {
        console.error('Error fetching product data:', error);
    }
}
