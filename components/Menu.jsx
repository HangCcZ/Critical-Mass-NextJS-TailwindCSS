import React, { useState } from 'react';
import MenuItems from '../data/menuItems';
import ItemCard from './ItemCard';

const Starters = MenuItems.items
  .filter((item) => item.type === 'starters')
  .sort((a, b) => a.menuOrder - b.menuOrder);

const Pasta = MenuItems.items
  .filter((item) => item.type === 'pasta')
  .sort((a, b) => a.menuOrder - b.menuOrder);
const Pizza = MenuItems.items
  .filter((item) => item.type === 'pizza')
  .sort((a, b) => a.menuOrder - b.menuOrder);

const Menu = () => {
  const [spicy, setSpicy] = useState(true);
  const onSpicyClick = () => {
    setSpicy(() => !spicy);
  };
  return (
    <>
      <div className="ml-auto">
        <div className="flex align-center items-center border-b-4 border-red-500">
          <img
            src={`./spicy.svg`}
            alt={`spicy logo`}
            title={'spicy'}
            className="h-8 w-8"
          />
          <button className="ml-1 focus:outline-none" onClick={onSpicyClick}>
            {spicy === true ? <CheckIcon /> : <CrossIcon />}
          </button>
        </div>
      </div>
      <div className="text-center mb-4">
        <div className="flex items-center ">
          <div className="mr-4 w-full h-3 bg-red-400 rounded-full "></div>
          <h1 className="font-bold text-xl text-gray-800 uppercase">
            Starters
          </h1>
          <div className="ml-4 w-full h-3 bg-red-400 rounded-full"></div>
        </div>
        {spicy === true
          ? Starters.map((item) => <ItemCard item={item} key={item.name} />)
          : Starters.filter((item) => item.spicy !== true).map((item) => (
              <ItemCard item={item} key={item.name} />
            ))}
      </div>
      <div className="text-center mb-4">
        <div className="flex items-center mb-2">
          <div className="mr-4 w-full h-3 bg-red-400 rounded-full "></div>
          <h1 className="font-bold text-xl text-gray-800 uppercase">Pasta</h1>
          <div className="ml-4 w-full h-3 bg-red-400 rounded-full"></div>
        </div>
        {spicy === true
          ? Pasta.map((item) => <ItemCard item={item} key={item.name} />)
          : Pasta.filter((item) => item.spicy !== true).map((item) => (
              <ItemCard item={item} key={item.name} />
            ))}
      </div>
      <div className="text-center mb-4">
        <div className="flex items-center mb-2">
          <div className="mr-4 w-full h-3 bg-red-400 rounded-full "></div>
          <h1 className="font-bold text-xl text-gray-800 uppercase">Pizza</h1>
          <div className="ml-4 w-full h-3 bg-red-400 rounded-full"></div>
        </div>
        {spicy === true
          ? Pizza.map((item) => <ItemCard item={item} key={item.name} />)
          : Pizza.filter((item) => item.spicy !== true).map((item) => (
              <ItemCard item={item} key={item.name} />
            ))}
      </div>
    </>
  );
};

export default Menu;

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
