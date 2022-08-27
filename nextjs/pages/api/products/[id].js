import products from '../../../data/products';

export default function productHandler(req, res) {
  const { query } = req;
  const { id } = query;
  const filtered = products.filter((p) => p.id === id);

  if (filtered.length > 0) {
    return res.status(200).json(filtered[0]);
  }

  return res.status(404).json({ message: `Product with id: ${id} not found.` });
}
