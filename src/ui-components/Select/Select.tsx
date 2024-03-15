import { ChangeEvent } from 'react';
import { SelectProps } from './Select.types';
import styles from './Select.module.css';
import ArrowDownIcon from '../../icons/ArrowDown';

export const Select = <T,>({ options, value, dataTestId, onChange }: SelectProps<T>) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    onChange(value === '' ? undefined : (value as T));
  };

  return (
    <div className={styles.wrapper} data-testid={dataTestId}>
      <select value={value} onChange={handleOnChange} className={styles.select}>
        {options.map((option, index) => (
          <option key={index} value={option.value ?? ''}>
            {option.label}
          </option>
        ))}
      </select>
      <ArrowDownIcon className={styles.icon} data-testid={`${dataTestId}-icon`} />
    </div>
  );
};
