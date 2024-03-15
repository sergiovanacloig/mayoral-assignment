import { RenderOptions, render } from '@testing-library/react';
import ColumnSelectorProvider from '../context/ColumnSelector/ColumnSelectorProvider';
import { ReactElement } from 'react';

export function renderWithColumnSelectorProvider<Props>(
  ui: ReactElement<Props>,
  providerProps?: Props,
  renderOptions?: RenderOptions & { providerProps?: Props },
) {
  const Wrapper = ({ children }) => (
    <ColumnSelectorProvider {...providerProps}>{children}</ColumnSelectorProvider>
  );

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}
