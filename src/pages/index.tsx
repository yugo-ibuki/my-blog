import type { NextPage } from 'next'
import Head from 'next/head'
import { client } from '../libs/client'

type Props = {
  data: {
    text: string
  }
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>{data.text}</h1>
        <p>
          Get started by editing <code >pages/index.js</code>
        </p>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blog',
  });

  return {
    props: {
      data,
    },
  }
}

export default Home
