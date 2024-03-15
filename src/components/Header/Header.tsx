import { SearchInput } from '../../ui-components/SearchInput';
import { Sort } from '../Sort';
import { Select } from '../../ui-components/Select';
import styles from './Header.module.css';
import useDebounceCallback from '../../utils/hooks/useDebounceCallback';
import { Order } from '../../utils/schemas/order';
import { orderByPriceOptions } from '../../utils/constants/order';
import useParams from '../../utils/hooks/useParams';
import { ORDER_PARAM, SEARCH_PARAM } from '../../utils/constants/params';

export const Header = () => {
  const { params, setParam } = useParams();
  const { search, order } = params;

  const handleOnSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setParam(SEARCH_PARAM, value);
  };

  const debouncedHandleSearch = useDebounceCallback(handleOnSearchChange, 500);

  const handleOnSelectChange = (orderValue?: Order) => {
    setParam(ORDER_PARAM, orderValue);
  };

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <SearchInput
          defaultValue={search as string}
          className={styles.search}
          placeHolder="Buscar..."
          onChange={(event) => debouncedHandleSearch(event)}
        />
        <Sort onSort={() => null} className={styles.sort} />
      </div>
      <Select
        className={styles.orderBy}
        value={order}
        options={orderByPriceOptions}
        onChange={handleOnSelectChange}
      />
    </header>
  );
};
