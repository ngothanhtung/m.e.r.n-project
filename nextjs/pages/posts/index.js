import Link from 'next/link';

const posts = [
  { id: '1', title: 'Post 1' },
  { id: '2', title: 'Post 2' },
];

export default function Posts() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
