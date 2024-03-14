import { ReactNode, MouseEventHandler } from 'react';
import { Order } from '../../utils/schemas/order';

export type SortProps = {
  className?: string;
  onSort: (order: Order | undefined) => void;
};

export type IconButtonProps = {
  icon: ReactNode;
  dataTestId: string;
  selected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
