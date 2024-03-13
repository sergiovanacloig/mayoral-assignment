import { Product } from '../schemas/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Jersey básico Better Cotton',
    image: '/path/to/image.jpg',
    price: 27.99,
  },

  {
    id: '2',
    name: 'Pantalón deportivo felpa',
    image: '/path/to/image.jpg',
    price: 50.33,
    hasColours: true,
  },
  {
    id: '3',
    name: 'Camiseta texto Better Cotton',
    image: '/path/to/image.jpg',
    price: 18.99,
    discount: 20,
    hasColours: true,
  },
  {
    id: '4',
    name: 'Bermuda sarga Better Cotton',
    image: '/path/to/image.jpg',
    price: 18.99,
    discount: 15,
  },
];
