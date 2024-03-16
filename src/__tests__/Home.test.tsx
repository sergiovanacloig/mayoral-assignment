import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages';
import { mockProducts } from '../utils/mocks/products';
import { Order } from '../utils/schemas/order';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import { createMockRouter } from '../utils/tests';

const mostExpensiveProductName = mockProducts[1].name;
const cheapestProductName = mockProducts[2].name;

describe('HomePage', () => {
  it('should update search query param when user types into search input', async () => {
    const searchValue = mockProducts[0].name;
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    userEvent.type(screen.getByPlaceholderText('Buscar...'), searchValue);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith(
        expect.objectContaining({ query: { search: searchValue } }),
        undefined,
        { shallow: true },
      );
    });
  });

  it('should filter products base on search', () => {
    const searchValue = mockProducts[0].name;
    const router = createMockRouter({ query: { search: searchValue } });

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    expect(screen.getAllByTestId('product-card')).toHaveLength(1);
  });

  it(`should update order query param when user selects "${Order.ASC}" order price`, () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    const orderByPriceSelect: HTMLSelectElement = screen.getByRole('combobox');

    userEvent.selectOptions(orderByPriceSelect, 'Precio ascendente');

    expect(orderByPriceSelect.value).toBe(Order.ASC);
    expect(router.push).toHaveBeenCalledWith(
      expect.objectContaining({ query: { order: Order.ASC } }),
      undefined,
      { shallow: true },
    );
  });

  it(`should update order query param when user selects "${Order.DESC}" order price`, () => {
    const router = createMockRouter({});

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    const orderByPriceSelect: HTMLSelectElement = screen.getByRole('combobox');

    userEvent.selectOptions(orderByPriceSelect, 'Precio descendente');

    expect(orderByPriceSelect.value).toBe(Order.DESC);
    expect(router.push).toHaveBeenCalledWith(
      expect.objectContaining({ query: { order: Order.DESC } }),
      undefined,
      { shallow: true },
    );
  });

  it(`should order products in ${Order.ASC} order`, () => {
    const router = createMockRouter({ query: { order: Order.ASC } });

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    const orderedProducts = screen.getAllByTestId('product-card');

    expect(orderedProducts[0]).toHaveTextContent(cheapestProductName);
    expect(orderedProducts[orderedProducts.length - 1]).toHaveTextContent(mostExpensiveProductName);
  });

  it(`should order products in ${Order.DESC} order`, () => {
    const router = createMockRouter({ query: { order: Order.DESC } });

    render(
      <RouterContext.Provider value={router}>
        <HomePage products={mockProducts} />
      </RouterContext.Provider>,
    );

    const orderedProducts = screen.getAllByTestId('product-card');

    expect(orderedProducts[0]).toHaveTextContent(mostExpensiveProductName);
    expect(orderedProducts[orderedProducts.length - 1]).toHaveTextContent(cheapestProductName);
  });

  it('should display empty message when no products', () => {
    render(<HomePage products={[]} />);

    screen.getByText('No se han encontrado productos');
  });
});
