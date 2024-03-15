import { useState } from 'react';
import ColumnSelectorContext from './ColumnSelectorContext';
import { ColumnSelectorType } from '../../../components/ColumnSelector/ColumnSelector.types';

const ColumnSelectorProvider = (props) => {
  const [columnSelector, setColumnSelector] = useState<ColumnSelectorType>(ColumnSelectorType.INCREMENT);

  return (
    <ColumnSelectorContext.Provider value={{ columnSelector, setColumnSelector }} {...props} />
  );
};

export default ColumnSelectorProvider;
