export function calculateDiscountedPrice(price: number, discount: number): number {
  if (discount <= 0) return price;

  const dicountPercentage = discount / 100;
  const discountedPrice = price - price * dicountPercentage;

  return Math.round(discountedPrice * 100) / 100;
}
