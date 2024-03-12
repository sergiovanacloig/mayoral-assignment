export type SearchInputProps = {
  dataTestId?: string;
  id?: string;
  className?: string;
  value?: string;
  placeHolder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
