import React from 'react';
import Link from 'next/link';

import { Logo, MugHot } from '../../utils/icons';
import { DonationButton, OutlineButton } from '../../components';

const NavFooter: React.FC = () => {
  return (
    <>
      <div className="bg-gray h-0.5" />
      <section className="flex flex-col justify-center w-full">
        <div className="flex flex-col lg:flex-row justify-between px-2 gap-4 lg:gap-0">
          <div className="flex flex-col gap-2 px-2 lg:px-0">
            <div className="flex flex-row items-center gap-6">
              <Logo size={50} />
              <h3>The Delicious Brew</h3>
            </div>
            <p>Your Gateway to Coffee Excellence.</p>
          </div>
          {<div className="flex lg:hidden bg-gray h-0.5 w-56 my-6" />}
          <nav className="flex flex-col lg:flex-row justify-between">
            <ul className="flex flex-col">
              <li className="clickable">
                <Link href="/shop">
                  <h4>SHOP</h4>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/espresso">
                  <p>Espresso</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/drip">
                  <p>Drip</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/pour-over">
                  <p>Pour Over</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/press">
                  <p>Press</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/beans">
                  <p>Beans</p>
                </Link>
              </li>
              <li className="clickable">
                <Link href="/shop/products/accessories">
                  <p>Additional Tools & Accessories</p>
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col">
              <li className="clickable">
                <Link href="/about">
                  <p className="font-semibold lg:font-normal">
                    About The Delicious Brew
                  </p>
                </Link>
              </li>
              <li>
                <DonationButton>
                  <OutlineButton text="Buy me a Coffee" Icon={MugHot} />
                </DonationButton>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default NavFooter;
