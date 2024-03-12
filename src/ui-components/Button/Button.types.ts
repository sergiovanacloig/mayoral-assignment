export type ButtonProps = {
  children: string;
  type?: ButtonType;
  dataTestId?: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset',
}
