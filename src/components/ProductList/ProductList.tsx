import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.css';
import { ProductListProps } from './ProductList.types';
import useColumnSelector from '../../utils/context/ColumnSelector/useColumnSelector';

export const ProductList = ({ products }: ProductListProps) => {
  const { columnSelector } = useColumnSelector();

  return (
    <div className={`${styles.list} ${styles[columnSelector]}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
