import { useMemo } from 'react';
import { Product } from '../schemas/product';
import { Order } from '../schemas/order';
import { calculateDiscountedPrice } from '../../utils/helpers';

type ProductsParams = {
  products: Product[];
  search?: string;
  order?: Order;
};

function useFilterProducts({ products, search, order }: ProductsParams) {
  const filteredProducts = useMemo(() => {
    let newProducts = [...products];

    if (search && search !== '') {
      newProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (order) {
      newProducts.sort((a, b) => {
        const priceA = a.discount ? calculateDiscountedPrice(a.price, a.discount) : a.price;
        const priceB = b.discount ? calculateDiscountedPrice(b.price, b.discount) : b.price;

        return order === Order.ASC ? priceA - priceB : priceB - priceA;
      });
    }

    return newProducts;
  }, [products, search, order]);

  return { filteredProducts };
}

export default useFilterProducts;
