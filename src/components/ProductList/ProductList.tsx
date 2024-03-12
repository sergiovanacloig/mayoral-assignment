import { ProductCard } from '../ProductCard';
import styles from './ProductList.module.css';
import { ProductListProps } from './ProductList.types';

export const ProductList = ({ products }: ProductListProps) => (
  <div className={styles.list}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
