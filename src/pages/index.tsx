import { NextPage } from 'next';
import { ProductList } from '../components/ProductList';
import { Header } from '../components/Header';
import { Product } from '../utils/schemas/product';
import styles from '../styles/Home.module.css';
import useFilterProducts from '../utils/hooks/useFilterProducts';
import ColumnSelectorProvider from '../utils/context/ColumnSelector/ColumnSelectorProvider';

type HomePageProps = {
  products: Product[];
};

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  const { filteredProducts } = useFilterProducts({ products });

  return (
    <ColumnSelectorProvider>
      <Header />
      {filteredProducts.length === 0 ? (
        <p className={styles.noProducts}>No se han encontrado productos</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </ColumnSelectorProvider>
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
