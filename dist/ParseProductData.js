export function parseProductData(jsonData) {
    try {
        return JSON.parse(jsonData);
    }
    catch (error) {
        return 'Error parsing product data: Invalid JSON format.';
    }
}
