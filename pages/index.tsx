import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Tienda Escom</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl text-blue-600">Tienda Escom</h1>
    </div>
  );
};

export default Home;