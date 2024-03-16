import { RenderOptions, render } from '@testing-library/react';
import ColumnSelectorProvider from '../context/ColumnSelector/ColumnSelectorProvider';
import { ReactElement } from 'react';
import { NextRouter } from 'next/router';

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

export function createMockRouter(router: Partial<NextRouter>): NextRouter {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}
