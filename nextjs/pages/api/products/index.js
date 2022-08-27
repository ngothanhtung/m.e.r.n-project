import { NextApiResponse, NextApiRequest } from 'next';
import products from '../../../data/products';

export default function handler(req, res) {
  return res.status(200).json(products);
}
