import React, { useState } from 'react';
import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa';
import { GrSearch, GrCart } from 'react-icons/gr';

import ShopNav from './ShopNav';
import NavLink from './NavLink';
import BlogNav from './BlogNav';

const NavBar: React.FC = () => {
  const [shopHover, setShopHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);

  return (
    <>
      <div className="absolute left-0 top-0 flex flex-col items-center w-screen bg-white z-50">
        <nav className="flex flex-row w-full lg:w-[1000px] justify-between px-4">
          <div className="flex flex-row items-center gap-8">
            <FaCoffee size={50} />
            <ul className="flex flex-row items-center gap-4">
              <li
                onMouseEnter={() => {
                  setShopHover(false), setBlogHover(false);
                }}
              >
                <NavLink href="/" exact>
                  <h4>HOME</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopHover(true), setBlogHover(false);
                }}
              >
                <NavLink href="/shop">
                  <h4>SHOP</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopHover(false), setBlogHover(true);
                }}
              >
                <NavLink href="/blog">
                  <h4>BLOG</h4>
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex flex-row items-center gap-4">
            <li
              onMouseEnter={() => {
                setShopHover(false), setBlogHover(false);
              }}
              className="clickable flex flex-col items-center"
            >
              <GrSearch size={25} />
              <p>Search</p>
            </li>
            <li
              onMouseEnter={() => {
                setShopHover(false), setBlogHover(false);
              }}
            >
              <Link
                href="/cart"
                className="clickable flex flex-col items-center"
              >
                <GrCart size={25} />
                <p>Cart</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bg-gray w-screen h-0.5" />
        {shopHover && <ShopNav status={setShopHover} />}
        {blogHover && <BlogNav status={setBlogHover} />}
      </div>
      {(shopHover || blogHover) && (
        <div className="absolute inset-0 opacity-90 z-10 bg-black " />
      )}
    </>
  );
};

export default NavBar;
