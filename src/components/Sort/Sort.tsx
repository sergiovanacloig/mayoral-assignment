import { useState } from 'react';
import PlusIcon from '../../icons/Plus';
import MinusIcon from '../../icons/Minus';
import styles from './Sort.module.css';
import { IconButtonProps, SortProps } from './Sort.types';
import { Order } from '../../utils/schemas/order';

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

export const Sort = ({ className, onSort }: SortProps) => {
  const [order, setOrder] = useState<Order>();

  const handleOnSort = (newOrder: Order) => {
    const nextOrder = order === undefined || order !== newOrder ? newOrder : undefined;

    onSort(nextOrder);
    setOrder(nextOrder);
  };

  return (
    <div data-testid="sort-component" className={`${styles.sort} ${className}`}>
      <IconButton
        dataTestId="minus-icon-button"
        selected={order === Order.DESC}
        onClick={() => handleOnSort(Order.DESC)}
        icon={<MinusIcon className={styles.icon} />}
      />
      <IconButton
        dataTestId="plus-icon-button"
        selected={order === Order.ASC}
        onClick={() => handleOnSort(Order.ASC)}
        icon={<PlusIcon className={styles.icon} />}
      />
    </div>
  );
};
