import React from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
const Home = () => (
  <div className="text-gray-700 bg-gray-100">
    <Head>
      <title>Hang's Very Fancy Italian Restaurant</title>
      <link rel="icon" href="/pizza.png" />
    </Head>
    <div className="mx-auto max-w-3xl ">
      <main className="flex flex-col px-8 pt-4 text-center">
        <h1 className="text-3xl text-red-400 mb-8 uppercase">
          <span className="text-4xl">Hang's </span>Very Fancy Italian Restaurant
        </h1>
        <Menu />
      </main>
      <hr />
      <Footer />
    </div>
  </div>
);

export default Home;
