import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const Home = () => (
  <div className="mx-auto max-w-3xl  text-gray-700 ">
    <Head>
      <title>Hang's Italian Kitchen</title>
      <link rel="icon" href="/pizza.png" />
    </Head>
    <main className="flex flex-col px-8 pt-4 text-center">
      <h1 className="text-3xl text-red-400 mb-8 uppercase">
        <span className="text-4xl">Hang's </span>Italian Kitchen
      </h1>
      <Menu />
    </main>
    <hr />
    <Footer />
  </div>
);

export default Home;
