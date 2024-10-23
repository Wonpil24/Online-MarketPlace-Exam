export function createPriceMultiplier(multiplier) {
    return function (price) {
        return price * multiplier;
    };
}
export function applyVAT(price) {
    const vatMultiplier = createPriceMultiplier(1.07); // 7% VAT
    return vatMultiplier(price);
}
