import { Product } from '../../utils/schemas/product';
import { ProductCard } from './ProductCard';
import { calculateDiscountedPrice, formatDiscount, formatPrice } from './ProductCard.helpers';
import { render, screen } from '@testing-library/react';

const mockProduct: Product = {
  id: '1234',
  name: 'Example Product',
  image: '/path/to/image.jpg',
  price: 18.99,
};

describe('ProductCard', () => {
  it('should render required product details', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByAltText(mockProduct.name)).toBeVisible();
    expect(screen.getByText(mockProduct.name)).toBeVisible();
    expect(screen.getByText(formatPrice(mockProduct.price))).toBeVisible();
    expect(screen.getByText('AÑADIR')).toBeVisible();
    expect(screen.queryByText('más colores')).not.toBeInTheDocument();
  });

  it('should render dicount price', () => {
    const discount = 20;
    const discountedPrice = calculateDiscountedPrice(mockProduct.price, discount);
    render(<ProductCard product={{ ...mockProduct, discount }} />);

    expect(screen.getByText(formatPrice(mockProduct.price))).toBeVisible();
    expect(screen.getByText(formatDiscount(discountedPrice, discount))).toBeVisible();
  });

  it('should render "más colores"', () => {
    render(<ProductCard product={{ ...mockProduct, hasColours: true }} />);

    expect(screen.getByText('más colores')).toBeVisible();
  });
});

describe('calculateDiscountedPrice', () => {
  it('should calculate the discounted price correctly with positive discount', () => {
    const price = 100;
    const discount = 20;
    const expectedDiscountedPrice = 80;

    const discountedPrice = calculateDiscountedPrice(price, discount);

    expect(discountedPrice).toBe(expectedDiscountedPrice);
  });

  it('should return initial price when applying 0 discount', () => {
    const price = 100;
    const discount = 0;

    const discountedPrice = calculateDiscountedPrice(price, discount);

    expect(discountedPrice).toBe(price);
  });

  it('should return initial price when applying negative discount', () => {
    const price = 100;
    const discount = -10;

    const discountedPrice = calculateDiscountedPrice(price, discount);

    expect(discountedPrice).toBe(price);
  });
});

describe('formatPrice', () => {
  it('should format price correctly', () => {
    const formattedPrice = formatPrice(19.99);

    expect(formattedPrice).toBe('19,99 €');
  });

  it('should format discount percentage correctly', () => {
    const formattedPrice = formatDiscount(15.19, 20);

    expect(formattedPrice).toBe('15,19 €(-20%)');
  });
});
