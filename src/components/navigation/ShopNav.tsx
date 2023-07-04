import React, { useState } from 'react';
import { FaMugHot } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { Link, Outlet } from 'react-router-dom';

import OutlineButton from '../OutlineButton';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopNav: React.FC<Props> = ({ status }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [links, setLinks] = useState([categories[0]]);

  return (
    <>
      <div className="absolute inset-0 opacity-60 z-10 bg-black " />
      <div
        onMouseLeave={() => status(false)}
        className="flex flex-row justify-center w-screen z-50 bg-white"
      >
        <nav className="flex flex-col z-50  w-full lg:w-[1000px] py-6">
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/shop">
                <h4 className="clickable italic font-normal underline underline-offset-4">
                  Shop All
                </h4>
              </Link>
            </li>
            <li
              onClick={() => status(false)}
              className="clickable flex flex-col items-center"
            >
              <GrClose size={25} />
              <p>Close</p>
            </li>
          </ul>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <ul className="flex flex-col">
                {categories.map((category, index) => (
                  <li
                    key={category.key}
                    onClick={() => {
                      setLinks([categories[index]]), setCurrentIndex(index);
                    }}
                    className={`clickable flex px-4 py-1 ${
                      currentIndex == index ? 'bg-gray font-bold' : 'bg-white'
                    } rounded  `}
                  >
                    {category.name}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col">
                {links.map((category) => (
                  <div key={category.key}>
                    {category.links.map((link) => (
                      <li
                        key={link.key}
                        onClick={() => status(false)}
                        className="clickable hover:scale-100"
                      >
                        <Link to={link.to}>{link.name}</Link>
                      </li>
                    ))}
                  </div>
                ))}
              </ul>
            </div>
            <div className="flex flex-row gap-8">
              <div className="bg-gray w-0.5 h-full" />
              <ul className="flex flex-col text-right">
                <li className="clickable">
                  <p>About Delicious Brew</p>
                </li>
                <li>
                  <Link to="/about">
                    <OutlineButton text="Buy me a Coffee" Icon={FaMugHot} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

const categories = [
  {
    key: 1,
    name: 'Espresso',
    links: [
      { key: 10, name: 'All Espresso', to: '/shop/espresso' },
      { key: 11, name: 'Machines', to: '/shop/espresso/machines' },
      {
        key: 12,
        name: 'Additional Tools & Accessories',
        to: '/shop/espresso/accessories',
      },
      { key: 13, name: 'Recommended Beans', to: '/shop/espresso/beans' },
    ],
  },
  {
    key: 2,
    name: 'Drip',
    links: [
      { key: 20, name: 'All Drip', to: '/shop/drip' },
      { key: 21, name: 'Machines', to: '/shop/drip/machines' },
      {
        key: 22,
        name: 'Accessories',
        to: '/shop/drip/accessories',
      },
      { key: 23, name: 'Recommended Beans', to: '/shop/drip/beans' },
    ],
  },
  {
    key: 3,
    name: 'Pour Over',
    links: [
      { key: 30, name: 'All Pour Over', to: '/shop/pourover' },
      { key: 31, name: 'Brewers', to: '/shop/pourover/brewers' },
      {
        key: 32,
        name: 'Additional Tools & Accessories',
        to: '/shop/pourover/accessories',
      },
      { key: 33, name: 'Recommended Beans', to: '/shop/pourover/beans' },
    ],
  },
  {
    key: 4,
    name: 'Press',
    links: [
      { key: 40, name: 'All Press', to: '/shop/press' },
      { key: 41, name: 'Brewers', to: '/shop/press/brewers' },
      {
        key: 42,
        name: 'Additional Tools & Accessories',
        to: '/shop/press/accessories',
      },
      { key: 43, name: 'Recommended Beans', to: '/shop/press/beans' },
    ],
  },
  {
    key: 5,
    name: 'Beans',
    links: [
      { key: 50, name: 'All Beans', to: '/shop/beans' },
      { key: 51, name: 'Whole Beans', to: '/shop/beans/whole' },
      { key: 52, name: 'Pre-Ground Beans', to: '/shop/beans/ground' },
    ],
  },
  {
    key: 6,
    name: 'Additional Tools & Accessories',
    links: [
      { key: 60, name: 'All Accessories', to: '/shop/accessories' },
      { key: 61, name: 'Grinders', to: '/shop/accessories/grinders' },
      { key: 62, name: 'Cleaning Supplies', to: '/shop/accessories/cleaning' },
      { key: 63, name: 'Filters', to: '/shop/accessories/filters' },
      {
        key: 64,
        name: 'Espresso Accessories',
        to: '/shop/accessories/espresso',
      },
      { key: 65, name: 'Kettles', to: '/shop/accessories/kettles' },
      { key: 66, name: 'Cups & Mugs', to: '/shop/accessories/cups' },
      {
        key: 67,
        name: 'Scales & Measuring',
        to: '/shop/accessories/measuring',
      },
    ],
  },
];

export default ShopNav;
