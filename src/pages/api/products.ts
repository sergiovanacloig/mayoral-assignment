import type { NextApiRequest, NextApiResponse } from 'next';
import { Product } from '../../utils/schemas/product';
import products from './db.json';

export default function handler(_: NextApiRequest, res: NextApiResponse<Product[]>) {
  res.status(200).json(products);
}
