import React from 'react';
import Link from 'next/link';
import { FaCoffee, FaMugHot } from 'react-icons/fa';

import { OutlineButton } from '../../components';

const NavFooter: React.FC = () => {
  return (
    <>
      <div className="bg-gray h-0.5" />
      <section className="flex flex-col justify-center w-full">
        <div className="flex flex-col lg:flex-row justify-between px-2 gap-4 lg:gap-0">
          <div className="flex flex-col gap-2 px-2 lg:px-0">
            <div className="flex flex-row items-center gap-6">
              <FaCoffee size={50} />
              <h3>Delicious Brew</h3>
            </div>
            <p>Your Gateway to Coffee Excellence.</p>
          </div>
          {<div className="flex lg:hidden bg-gray h-0.5 w-40 my-6" />}
          <nav className="flex flex-col lg:flex-row">
            <ul className="flex flex-col">
              <li className="clickable">
                <Link href="/shop">
                  <h4>SHOP</h4>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/espresso">
                  <p>Espresso</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/drip">
                  <p>Drip</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/pourover">
                  <p>Pour Over</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/press">
                  <p>Press</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/beans">
                  <p>Beans</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/accessories">
                  <p>Additional Tools & Accessories</p>
                </Link>
              </li>
            </ul>
            {<div className="flex lg:hidden bg-gray h-0.5 w-40 my-6" />}
            <ul className="flex flex-col">
              <li className="clickable">
                <Link href="/about">
                  <p>About Delicious Brew</p>
                </Link>
              </li>
              <li>
                <OutlineButton text="Buy me a Coffee" Icon={FaMugHot} />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default NavFooter;
