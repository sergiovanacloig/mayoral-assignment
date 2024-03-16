import { screen } from '@testing-library/react';
import { renderWithColumnSelectorProvider } from '../../utils/tests';
import { ProductList } from './ProductList';
import { mockProducts } from '../../utils/mocks/products';

describe('ProductList', () => {
  it('should render a list of products', () => {
    renderWithColumnSelectorProvider(<ProductList products={mockProducts} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });
});
