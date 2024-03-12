import { ButtonProps, ButtonType } from './Button.types';
import styles from './Button.module.css';

export const Button = ({
  className,
  children,
  type = ButtonType.Button,
  dataTestId,
  onClick,
}: ButtonProps) => (
  <button
    className={`${styles.button} ${className}`}
    type={type}
    onClick={onClick}
    data-testid={dataTestId}
  >
    {children}
  </button>
);
