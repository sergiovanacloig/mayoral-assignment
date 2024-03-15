import { useState } from 'react';
import { NextPage } from 'next';
import { SearchInput } from '../ui-components/SearchInput';
import { ProductList } from '../components/ProductList';
import { Sort } from '../components/Sort';
import { Product } from '../utils/schemas/product';
import useDebounceCallback from '../utils/hooks/useDebounceCallback';
import styles from '../styles/Home.module.css';
import { Order } from '../utils/schemas/order';
import useFilterProducts from '../utils/hooks/useFilterProducts';
import { orderByPriceOptions } from '../utils/constants/order';
import { Select } from '../ui-components/Select';

type HomePageProps = {
  products: Product[];
};

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  const [search, setSearch] = useState<string>();
  const [order, setOrder] = useState<Order>();
  const { filteredProducts } = useFilterProducts({ products, search, order });

  const handleSearch = (value: string): void => {
    setSearch(value);
  };

  const debouncedHandleSearch = useDebounceCallback(handleSearch, 500);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedHandleSearch(event.target.value);
  };

  const handleOnSort = (order: Order): void => {
    setOrder(order);
  };

  const handleOnSelectChange = (value?: Order) => {
    setOrder(value);
  };

  return (
    <>
      <header className={styles.header}>
        <SearchInput className={styles.search} placeHolder="Buscar..." onChange={handleOnChange} />
        <Sort onSort={handleOnSort} className={styles.sort} />
        <Select value={order} options={orderByPriceOptions} onChange={handleOnSelectChange}  />
      </header>
      {filteredProducts.length === 0 ? (
        <p className={styles.noProducts}>No se han encontrado productos</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/products');
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}

export default HomePage;
