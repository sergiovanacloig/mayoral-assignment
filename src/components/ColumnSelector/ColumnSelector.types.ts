import { ReactNode, MouseEventHandler } from 'react';

export enum ColumnSelectorType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export type IconButtonProps = {
  icon: ReactNode;
  dataTestId: string;
  selected?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export type ColumnSelectorProps = {
  dataTestId?: string;
  className?: string;
};
