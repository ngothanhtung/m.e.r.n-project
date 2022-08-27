import { NextApiResponse, NextApiRequest } from 'next';
import products from '../../../data/products';

export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).json(products);
  }

  return res.status(200).json(products);
}
