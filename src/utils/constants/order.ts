import { SelectOption } from '../../ui-components/Select';
import { Order } from '../schemas/order';

export const orderByPriceOptions: SelectOption[] = [
  { label: 'Por defecto' },
  { label: 'Precio ascendente', value: Order.ASC },
  { label: 'Precio descendente', value: Order.DESC },
];
