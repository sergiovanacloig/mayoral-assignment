import { render, screen } from '@testing-library/react';
import { Sort } from './Sort';
import { Order } from '../../utils/schemas/order';
import userEvent from '@testing-library/user-event';

describe('Sort', () => {
  it('should render correctly', () => {
    render(<Sort onSort={jest.fn()} />);

    expect(screen.getByTestId('sort-component')).toBeInTheDocument();
  });

  it(`should call onSort function with ${Order.DESC} when MinusIcon button is clicked`, () => {
    const handleOnSort = jest.fn();

    render(<Sort onSort={handleOnSort} />);

    userEvent.click(screen.getByTestId('minus-icon-button'));

    expect(handleOnSort).toHaveBeenCalledWith(Order.DESC);
  });

  it(`should call onSort function with ${Order.ASC} when PlusIcon button is clicked`, () => {
    const handleOnSort = jest.fn();

    render(<Sort onSort={handleOnSort} />);

    userEvent.click(screen.getByTestId('plus-icon-button'));

    expect(handleOnSort).toHaveBeenCalledWith(Order.ASC);
  });

  it(`should call onSort function with "undefined" when MinusIcon button is clicked twice`, () => {
    const handleOnSort = jest.fn();

    render(<Sort onSort={handleOnSort} />);

    const minusIconButton = screen.getByTestId('minus-icon-button')

    userEvent.click(minusIconButton);
    userEvent.click(minusIconButton);

    expect(handleOnSort).toHaveBeenCalledWith(undefined);
  });

  it(`should call onSort function with "undefined" when PlusIcon button is clicked twice`, () => {
    const handleOnSort = jest.fn();

    render(<Sort onSort={handleOnSort} />);

    const plusIconButton = screen.getByTestId('plus-icon-button')

    userEvent.click(plusIconButton);
    userEvent.click(plusIconButton);

    expect(handleOnSort).toHaveBeenCalledWith(undefined);
  });
});
