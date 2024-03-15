import styles from './SearchInput.module.css';
import { SearchInputProps } from './SearchInput.types';
import SearchIcon from '../../icons/Search';

export const SearchInput = ({
  dataTestId,
  id,
  className,
  defaultValue,
  placeHolder,
  onChange,
}: SearchInputProps) => (
  <div className={`${styles.wrapper} ${className}`} data-testid={dataTestId}>
    <SearchIcon className={styles.icon} />
    <input
      type="search"
      className={styles.input}
      id={id}
      defaultValue={defaultValue}
      placeholder={placeHolder}
      onChange={onChange}
    />
  </div>
);
