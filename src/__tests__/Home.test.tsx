import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages';
import { mockProducts } from '../utils/mocks/products';
import { Order } from '../utils/schemas/order';

const mostExpensiveProductName = mockProducts[1].name;
const cheapestProductName = mockProducts[2].name;

describe('HomePage', () => {
  it('should filter products based on search', async () => {
    render(<HomePage products={mockProducts} />);

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);

    userEvent.type(screen.getByPlaceholderText('Buscar...'), mockProducts[0].name);

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(1);
    });
  });

  it(`should order products in ${Order.ASC} order`, () => {
    render(<HomePage products={mockProducts} />);

    userEvent.click(screen.getByTestId('plus-icon-button'));

    const orderedProducts = screen.getAllByTestId('product-card');

    expect(orderedProducts[0]).toHaveTextContent(cheapestProductName);
    expect(orderedProducts[orderedProducts.length - 1]).toHaveTextContent(mostExpensiveProductName);
  });

  it(`should order products in ${Order.DESC} order`, () => {
    render(<HomePage products={mockProducts} />);

    userEvent.click(screen.getByTestId('minus-icon-button'));

    const orderedProducts = screen.getAllByTestId('product-card');

    expect(orderedProducts[0]).toHaveTextContent(mostExpensiveProductName);
    expect(orderedProducts[orderedProducts.length - 1]).toHaveTextContent(cheapestProductName);
  });

  it('should display empty message when no products', () => {
    render(<HomePage products={[]} />);

    screen.getByText('No se han encontrado productos');
  });
});
