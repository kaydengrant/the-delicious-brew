import React, { useState } from 'react';
import Link from 'next/link';
import { FaMugHot } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import { OutlineButton } from '../../components';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopNav: React.FC<Props> = ({ status }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [links, setLinks] = useState([categories[0]]);

  return (
    <div
      onMouseLeave={() => status(false)}
      className="flex flex-row justify-center w-screen h-[400px] z-50 bg-white"
    >
      <nav className="flex flex-col z-50 w-full lg:w-[1000px] py-6">
        <ul className="flex flex-row justify-between">
          <li onClick={() => status(false)}>
            <Link href="/shop">
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
                  {category.title}
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
                      <Link href={link.to}>{link.title}</Link>
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
                <Link href="/about">
                  <OutlineButton text="Buy me a Coffee" Icon={FaMugHot} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const categories = [
  {
    key: 1,
    name: 'espresso',
    title: 'Espresso',
    links: [
      { key: 10, title: 'All Espresso', to: '/shop/products/espresso' },
      { key: 11, title: 'Machines', to: '/shop/products/espresso-machines' },
      {
        key: 12,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/espresso-accessories',
      },
      {
        key: 13,
        title: 'Recommended Beans',
        to: '/shop/products/espresso-beans',
      },
    ],
  },
  {
    key: 2,
    name: 'drip',
    title: 'Drip',
    links: [
      { key: 20, title: 'All Drip', to: '/shop/products/drip' },
      { key: 21, title: 'Machines', to: '/shop/products/drip-machines' },
      {
        key: 22,
        title: 'Accessories',
        to: '/shop/products/drip-accessories',
      },
      { key: 23, title: 'Recommended Beans', to: '/shop/products/drip-beans' },
    ],
  },
  {
    key: 3,
    name: 'pourover',
    title: 'Pour Over',
    links: [
      { key: 30, title: 'All Pour Over', to: '/shop/products/pourover' },
      { key: 31, title: 'Brewers', to: '/shop/products/pourover-brewers' },
      {
        key: 32,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/pourover-accessories',
      },
      {
        key: 33,
        title: 'Recommended Beans',
        to: '/shop/products/pourover-beans',
      },
    ],
  },
  {
    key: 4,
    name: 'press',
    title: 'Press',
    links: [
      { key: 40, title: 'All Press', to: '/shop/products/press' },
      { key: 41, title: 'Brewers', to: '/shop/products/press-brewers' },
      {
        key: 42,
        title: 'Additional Tools & Accessories',
        to: '/shop/products/press-accessories',
      },
      { key: 43, title: 'Recommended Beans', to: '/shop/products/press-beans' },
    ],
  },
  {
    key: 5,
    name: 'beans',
    title: 'Beans',
    links: [
      { key: 50, title: 'All Beans', to: '/shop/products/beans' },
      { key: 51, title: 'Whole Beans', to: '/shop/products/beans-whole' },
      { key: 52, title: 'Pre-Ground Beans', to: '/shop/products/beans-ground' },
    ],
  },
  {
    key: 6,
    name: 'accessories',
    title: 'Additional Tools & Accessories',
    links: [
      { key: 60, title: 'All Accessories', to: '/shop/products/accessories' },
      { key: 61, title: 'Grinders', to: '/shop/products/accessories-grinders' },
      {
        key: 62,
        title: 'Cleaning Supplies',
        to: '/shop/products/accessories-cleaning',
      },
      { key: 63, title: 'Filters', to: '/shop/products/accessories-filters' },
      {
        key: 64,
        title: 'Espresso Accessories',
        to: '/shop/products/accessories-espresso',
      },
      { key: 65, title: 'Kettles', to: '/shop/products/accessories-kettles' },
      { key: 66, title: 'Cups & Mugs', to: '/shop/products/accessories-cups' },
      {
        key: 67,
        title: 'Scales & Measuring',
        to: '/shop/products/accessories-measuring',
      },
    ],
  },
];

export default ShopNav;
