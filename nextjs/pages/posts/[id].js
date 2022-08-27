import { useRouter } from 'next/router';

export default function Post() {
  const { query } = useRouter();

  return <div style={{ padding: 12 }}>{query.id}</div>;
}
