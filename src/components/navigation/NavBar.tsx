import React, { useState } from 'react';
import Link from 'next/link';
import { FaCoffee } from 'react-icons/fa';
import { GrSearch, GrCart, GrMenu } from 'react-icons/gr';

import { NavShop, NavLink, NavBlog, NavMobile } from '../../components';
import { useStateContext } from '../../context/StateContext';

const NavBar: React.FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const { totalQuantities } = useStateContext();

  return (
    <>
      <div className="absolute left-0 top-0 flex flex-col items-center w-screen bg-white z-40">
        <nav className="flex flex-row w-full lg:w-[1000px] justify-between items-center p-4">
          <div className="flex flex-row items-center gap-8">
            <Link href="/">
              <FaCoffee size={50} />
            </Link>
            <ul className="hidden md:flex flex-row items-center gap-4">
              <li
                onMouseEnter={() => {
                  setShopOpen(false), setBlogOpen(false);
                }}
              >
                <NavLink href="/" exact>
                  <h4>HOME</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopOpen(true), setBlogOpen(false);
                }}
              >
                <NavLink href="/shop">
                  <h4>SHOP</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopOpen(false), setBlogOpen(true);
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
                setShopOpen(false), setBlogOpen(false);
              }}
              className="clickable flex flex-col items-center"
            >
              <GrSearch size={25} />
              <p>Search</p>
            </li>
            <li
              onMouseEnter={() => {
                setShopOpen(false), setBlogOpen(false);
              }}
            >
              <Link
                href="/cart"
                className="clickable flex flex-col items-center"
              >
                <div className="relative">
                  {totalQuantities > 0 && (
                    <span className="absolute flex items-center justify-center right-[-4px] top-[-4px] bg-errorRed text-white w-5 h-5 rounded-full text-center font-semibold text-xs">
                      {totalQuantities}
                    </span>
                  )}
                  <GrCart size={25} />
                  <p>Cart</p>
                </div>
              </Link>
            </li>
            <li
              onMouseEnter={() => {
                setShopOpen(false), setBlogOpen(false);
              }}
              onClick={() => setHamburgerOpen(true)}
              className="md:hidden clickable flex flex-col items-center"
            >
              <GrMenu size={25} />
              <p>Menu</p>
            </li>
          </ul>
        </nav>
        <div className="bg-gray w-screen h-0.5" />
        {shopOpen && !hamburgerOpen && <NavShop status={setShopOpen} />}
        {blogOpen && !hamburgerOpen && <NavBlog status={setBlogOpen} />}
      </div>
      {hamburgerOpen && <NavMobile status={setHamburgerOpen} />}
      {(shopOpen || blogOpen) && (
        <div className="absolute inset-0 opacity-90 z-10 bg-black " />
      )}
    </>
  );
};

export default NavBar;
