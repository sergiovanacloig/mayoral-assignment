import { ColumnSelectorType } from '../../../components/ColumnSelector/ColumnSelector.types';
import { createContext } from 'react';

type ColumnSelectorContextType = {
  columnSelector: ColumnSelectorType;
  setColumnSelector: (selector: ColumnSelectorType) => void;
};

const ColumnSelectorContext = createContext<ColumnSelectorContextType>(undefined);

ColumnSelectorContext.displayName = 'ColumnSelectorContext';

export default ColumnSelectorContext;
