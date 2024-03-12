import { Product } from 'utils/schemas/product';
import { ProductList } from './ProductList';

import { render, screen } from '@testing-library/react';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Jersey básico Better Cotton',
    image: '/path/to/image.jpg',
    price: 18.99,
  },
  {
    id: '2',
    name: 'Pantalón deportivo felpa',
    image: '/path/to/image.jpg',
    price: 18.99,
    hasColours: true,
  },
  {
    id: '3',
    name: 'Camiseta texto Better Cotton',
    image: '/path/to/image.jpg',
    price: 18.99,
    discount: 20,
    hasColours: true,
  },
  {
    id: '4',
    name: 'Bermuda sarga Better Cotton',
    image: '/path/to/image.jpg',
    price: 18.99,
    discount: 15,
  },
];

describe('ProductList', () => {
  it('should render a list of products', () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });
});
