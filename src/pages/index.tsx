import { NextPage } from 'next';

import { SearchInput } from '../ui-components/SearchInput';
import { ProductList } from '../components/ProductList';
import { Order, Sort } from '../components/Sort';
import { Product } from '../utils/schemas/product';
import useDebounceCallback from '../utils/hooks/useDebounceCallback';

import styles from '../styles/Home.module.css';

const products: Product[] = [
  {
    id: '1',
    name: 'Jersey básico Better Cotton',
    image:
      'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_1920/v1702911166/24-00311-074-XL-5/jersey-basico-better-cotton-nino-rafia-XL-5.jpg',
    price: 18.99,
  },
  {
    id: '3',
    name: 'Camiseta texto Better Cotton',
    image:
      'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_1920/v1700831592/24-00170-046-XL-5/camiseta-texto-better-cotton-nino--pimenton-XL-5.jpg',
    price: 18.99,
    discount: 20,
    hasColours: true,
  },
  {
    id: '2',
    image:
      'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_1920/v1701157397/24-00742-027-XL-5/pantalon-deportivo-felpa-nino-riviera-XL-5.jpg',
    price: 18.99,
    hasColours: true,
    name: 'Pantalón deportivo felpa',
  },
  {
    id: '4',
    name: 'Bermuda sarga Better Cotton',
    image:
      'https://assets.mayoral.com/images/t_auto_img,f_auto,c_limit,w_1920/v1701157196/24-00204-068-XL-5/bermuda-sarga-better-cotton-nino-sandia-XL-5.jpg',
    price: 18.99,
    discount: 15,
  },
];

const HomePage: NextPage = () => {
  const handleSearch = (value: string): void => {
    console.log('ON CHANGE', value);
  };

  const debouncedHandleSearch = useDebounceCallback(handleSearch, 500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearch(event.target.value);
  };

  const handleOnSort = (order: Order): void => {
    console.log('ORDER', order);
  };

  return (
    <>
      <header className={styles.header}>
        <SearchInput className={styles.search} placeHolder="Buscar..." onChange={handleOnChange} />
        <Sort onSort={handleOnSort} className={styles.sort} />
      </header>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
