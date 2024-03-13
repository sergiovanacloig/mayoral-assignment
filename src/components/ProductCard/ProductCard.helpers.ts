export function formatPrice(price: number | string): string {
  return `${price.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €`;
}

export function formatDiscount(discountedPrice: number, discount: number): string {
  return `${formatPrice(discountedPrice)}(-${discount}%)`;
}
