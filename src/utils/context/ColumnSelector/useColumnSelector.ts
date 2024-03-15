import { useContext } from "react";
import ColumnSelectorContext from "./ColumnSelectorContext";

const useColumnSelector = () => {
  const context = useContext(ColumnSelectorContext);

  if (!context) {
    throw new Error('"useColumnSelector" must be used within "ColumnSelectorProvider"');
  }

  return context;
};

export default useColumnSelector;