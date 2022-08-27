import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Products() {
  const { data, error } = useSWR('/api/products', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href='/products/[id]' as={`/products/${product.id}`}>
            <a>{product.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
