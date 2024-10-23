import { Product } from './app/models/product';

export function createPriceMultiplier(multiplier: number): (price: number) => number {
    return (price: number) => price * multiplier;
}

export function applyVAT(price: number): number {
    const vatMultiplier = createPriceMultiplier(1.07); // 7% VAT
    return vatMultiplier(price);
}
