import React, { useState } from 'react';
import MenuItems from '../data/menuItems';
import CategoryMenu from './CategoryMenu';

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
          <span className="text-red-500">*</span>
          <button
            className="ml-1 focus:outline-none w-6 h-6 border border-red-400 "
            onClick={onSpicyClick}>
            {spicy === true && <CheckIcon />}
          </button>
        </div>
      </div>
      <CategoryMenu
        categoryName="Starters"
        categoryList={Starters}
        spicy={spicy}
      />
      <CategoryMenu categoryName="Pasta" categoryList={Pasta} spicy={spicy} />
      <CategoryMenu categoryName="Pizza" categoryList={Pizza} spicy={spicy} />
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
