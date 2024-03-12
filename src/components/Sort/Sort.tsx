import PlusIcon from '../../icons/Plus';
import MinusIcon from '../../icons/Minus';
import styles from './Sort.module.css';
import { IconButtonProps, Order, SortProps } from './Sort.types';

const IconButton = ({ icon, dataTestId, onClick }: IconButtonProps) => (
  <button data-testid={dataTestId} className={styles.iconButton} type="button" onClick={onClick}>
    {icon}
  </button>
);

export const Sort = ({ className, onSort }: SortProps) => (
  <div data-testid="sort-component" className={`${styles.sort} ${className}`}>
    <IconButton
      dataTestId="minus-icon-button"
      onClick={() => onSort(Order.DESC)}
      icon={<MinusIcon className={styles.icon} />}
    />
    <IconButton
      dataTestId="plus-icon-button"
      onClick={() => onSort(Order.ASC)}
      icon={<PlusIcon className={styles.icon} />}
    />
  </div>
);
