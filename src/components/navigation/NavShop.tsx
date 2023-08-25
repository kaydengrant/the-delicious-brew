import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { MugHot, Close, navBarExtendedAnim, navCategories } from '../../utils';
import { DonationButton, OutlineButton } from '../../components';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShopNav: React.FC<Props> = ({ status }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [links, setLinks] = useState([navCategories[0]]);

  return (
    <motion.div
      variants={navBarExtendedAnim}
      initial="hidden"
      animate="show"
      onMouseLeave={() => status(false)}
      className="flex flex-row justify-center w-screen h-[400px] bg-white z-[-1] px-2 lg:px-0"
    >
      <nav className="flex flex-col w-full lg:w-[1000px] py-6">
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
            <Close size={25} />
            <p>Close</p>
          </li>
        </ul>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row">
            <ul className="flex flex-col">
              {navCategories.map((category, index) => (
                <li
                  key={category.key}
                  onClick={() => {
                    setLinks([navCategories[index]]), setCurrentIndex(index);
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
                      className="clickable hover:scale-100 py-[0.1rem]"
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
                <Link href="/about">
                  <p>About Delicious Brew</p>
                </Link>
              </li>
              <li>
                <DonationButton>
                  <OutlineButton text="Buy me a Coffee" Icon={MugHot} />
                </DonationButton>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.div>
  );
};

export default ShopNav;
