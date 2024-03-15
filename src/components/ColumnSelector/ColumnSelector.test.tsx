import { screen } from '@testing-library/react';
import { ColumnSelector } from './ColumnSelector';
import userEvent from '@testing-library/user-event';
import { ColumnSelectorType } from './ColumnSelector.types';
import { renderWithColumnSelectorProvider } from '../../utils/tests';

describe('ColumnSelector', () => {
  it('should render component correctly', () => {
    renderWithColumnSelectorProvider(<ColumnSelector />);

    expect(screen.getByTestId('column-selector-component')).toBeVisible();
  });

  it(`should set columnSelector to ${ColumnSelectorType.DECREMENT} after clicking on minus icon`, () => {
    renderWithColumnSelectorProvider(<ColumnSelector />);

    const minusIconButton = screen.getByTestId('minus-icon-button');

    userEvent.click(minusIconButton);

    expect(minusIconButton).toHaveClass('selected');
  });

  it(`should set columnSelector to ${ColumnSelectorType.INCREMENT} after clicking on plus icon`, () => {
    renderWithColumnSelectorProvider(<ColumnSelector />);

    const plusIconButton = screen.getByTestId('plus-icon-button');

    userEvent.click(plusIconButton);

    expect(plusIconButton).toHaveClass('selected');
  });
});
