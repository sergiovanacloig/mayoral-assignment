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
      <Image src={image} alt={name} height={300} width={270} />
      <p className={styles.title}>{name}</p>
      <div className={styles.priceSection}>
        {dicountedPrice ? (
          <>
            <span className={`${styles.price}, ${styles.previousPrice}`}>{priceFormatted}</span>
            <span className={styles.discountPrice}>
              {formatDiscount(dicountedPrice, discount)}
            </span>
          </>
        ) : (
          <span className={styles.price}>{priceFormatted}</span>
        )}
      </div>
      <span className={`${styles.moreColours} ${!hasColours && styles.hidden}`}>más colores</span>
      <Button className={styles.button} onClick={handleOnClick}>
        AÑADIR
      </Button>
    </article>
  );
};
