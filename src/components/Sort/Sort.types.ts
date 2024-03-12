import { ReactNode, MouseEventHandler } from 'react';

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortProps = {
  className?: string;
  onSort: (order: Order) => void;
};

export type IconButtonProps = {
  icon: ReactNode;
  dataTestId: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};
