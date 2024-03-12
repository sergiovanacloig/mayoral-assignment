import Image from 'next/image';
import { Button } from '../../ui-components/Button';
import { ProductCardProps } from './ProductCard.types';
import styles from './ProductCard.module.css';
import { formatPrice, formatDiscount } from './ProductCard.helpers';
import { calculateDiscountedPrice } from '../../utils/helpers';

export const ProductCard = ({ product }: ProductCardProps) => {
  const { name, image, price, discount, hasColours } = product;
  const dicountedPrice = discount && calculateDiscountedPrice(price, discount);
  const priceFormatted = formatPrice(price);

  const handleOnClick = (): void => {
    console.log(`"${name}" se ha añadido.`);
  };

  return (
    <article className={styles.card} data-testid="product-card">
      <Image src={image} alt={name} height={300} width={300} />
      <div className={styles.content}>
        <p className={styles.title}>{name}</p>
        {dicountedPrice ? (
          <div className={styles.priceSection}>
            <span className={`${styles.price}, ${styles.previousPrice}`}>{priceFormatted}</span>
            <span className={styles.discountedPrice}>
              {formatDiscount(dicountedPrice, discount)}
            </span>
          </div>
        ) : (
          <span className={styles.price}>{priceFormatted}</span>
        )}
        {hasColours ? <span className={styles.moreColours}>más colores</span> : null}
        <Button className={styles.button} onClick={handleOnClick}>
          AÑADIR
        </Button>
      </div>
    </article>
  );
};
