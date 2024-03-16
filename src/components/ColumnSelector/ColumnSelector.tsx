import PlusIcon from '../../icons/Plus';
import MinusIcon from '../../icons/Minus';
import styles from './ColumnSelector.module.css';
import { IconButtonProps, ColumnSelectorType, ColumnSelectorProps } from './ColumnSelector.types';
import useColumnSelector from '../../utils/context/ColumnSelector/useColumnSelector';

const IconButton = ({ icon, selected, dataTestId, onClick }: IconButtonProps) => (
  <button
    data-testid={dataTestId}
    className={`${styles.iconButton} ${selected && styles.selected}`}
    type="button"
    onClick={onClick}
  >
    {icon}
  </button>
);

export const ColumnSelector = ({ dataTestId, className }: ColumnSelectorProps) => {
  const { columnSelector, setColumnSelector } = useColumnSelector();

  const handleOnClickIcon = (newColumnSelector: ColumnSelectorType) => {
    setColumnSelector(newColumnSelector);
  };

  return (
    <div data-testid={dataTestId} className={`${styles.selector} ${className}`}>
      <IconButton
        dataTestId="minus-icon-button"
        selected={columnSelector === ColumnSelectorType.DECREMENT}
        onClick={() => handleOnClickIcon(ColumnSelectorType.DECREMENT)}
        icon={<MinusIcon className={styles.icon} />}
      />
      <IconButton
        dataTestId="plus-icon-button"
        selected={columnSelector === ColumnSelectorType.INCREMENT}
        onClick={() => handleOnClickIcon(ColumnSelectorType.INCREMENT)}
        icon={<PlusIcon className={styles.icon} />}
      />
    </div>
  );
};
