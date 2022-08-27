import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';

export default function FirstPost({ post }) {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>{post.title}</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
      <main>
        <img style={{ width: '100%' }} src='/images/nature.jpeg' alt='Nature Picture' />

        <Image
          src='/images/nature.jpeg' // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt='Your Name'
        />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = { id: 1, title: 'First Post 1234' + new Date() };

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      post: data,
    },
  };
}

export async function getServerSideProps(context) {
  return {
    props: {
      // props for your component
    },
  };
}
