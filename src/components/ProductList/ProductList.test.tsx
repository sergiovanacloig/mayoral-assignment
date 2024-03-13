import { render, screen } from '@testing-library/react';
import { ProductList } from './ProductList';
import { mockProducts } from '../../utils/mocks/products';

describe('ProductList', () => {
  it('should render a list of products', () => {
    render(<ProductList products={mockProducts} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });
});
