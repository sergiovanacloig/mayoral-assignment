export type SearchInputProps = {
  dataTestId?: string;
  id?: string;
  className?: string;
  defaultValue?: string;
  placeHolder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
