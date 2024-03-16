import { SearchInput } from './SearchInput';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const placeHolder = 'Buscar';
const value = 'Random value';

describe('SearchInput', () => {
  it('should render search component successfully', () => {
    const dataTestId = 'search';

    render(<SearchInput dataTestId={dataTestId} onChange={jest.fn()} />);

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });

  it('should have type "search"', () => {
    render(<SearchInput onChange={jest.fn()} />);

    expect(screen.getByRole('searchbox')).toHaveAttribute('type', 'search');
  });

  it('should render placeHolder successfully', () => {
    render(<SearchInput placeHolder={placeHolder} onChange={jest.fn()} />);

    expect(screen.getByPlaceholderText(placeHolder)).toBeVisible();
  });

  it('should accept a default value', () => {
    const handleOnChange = jest.fn();

    render(<SearchInput defaultValue={value} onChange={handleOnChange} />);

    expect(screen.getByRole('searchbox')).toHaveValue(value);
  });

  it('should call function on change', async () => {
    const handleOnChange = jest.fn();

    render(<SearchInput placeHolder={placeHolder} onChange={handleOnChange} />);

    userEvent.type(screen.getByRole('searchbox'), value);

    expect(handleOnChange).toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.getByRole('searchbox')).toHaveValue(value);
    });
  });
});
