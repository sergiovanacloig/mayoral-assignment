import { screen } from '@testing-library/react';
import { renderWithColumnSelectorProvider } from '../../utils/tests';
import { Header } from './Header';

describe('Header', () => {
  it('should render component correctly', () => {
    renderWithColumnSelectorProvider(<Header />);

    expect(screen.getByTestId('header')).toBeVisible();
    expect(screen.getByTestId('search-input')).toBeVisible();
    expect(screen.getByTestId('column-selector')).toBeVisible();
    expect(screen.getByTestId('order-by-price')).toBeVisible();
  });
});
