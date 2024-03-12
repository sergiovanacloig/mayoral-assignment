export function calculateDiscountedPrice(price: number, discount: number): number {
  if (discount <= 0) return price;

  const dicountPercentage = discount / 100;
  const discountedPrice = price - price * dicountPercentage;

  return Math.round(discountedPrice * 100) / 100;
}

export function formatPrice(price: number | string): string {
  return `${price.toLocaleString('es-ES')} €`;
}

export function formatDiscount(discountedPrice: number, discount: number): string {
  return `${formatPrice(discountedPrice)}(-${discount}%)`;
}
