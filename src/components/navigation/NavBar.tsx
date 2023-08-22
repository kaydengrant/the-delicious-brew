import React, { useState } from 'react';
import Link from 'next/link';

import { Logo, Search, Cart, HamburgerMenu } from '../../utils';
import {
  NavShop,
  NavLink,
  NavBlog,
  NavMobile,
  SearchBar,
} from '../../components';
import { useStateContext } from '../../context/StateContext';

const NavBar: React.FC = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const { totalQuantities } = useStateContext();

  return (
    <>
      {(shopOpen || blogOpen) && (
        <div className="absolute inset-0 opacity-90 z-10 bg-black " />
      )}
      <header className="flex flex-col items-center w-screen bg-white z-40 header-container">
        <nav
          onMouseLeave={() => {
            setShowSearchBar(false);
          }}
          className={`flex flex-row w-full lg:w-[1000px] items-center p-4 ${
            showSearchBar
              ? 'justify-center sm:justify-between'
              : 'justify-between'
          }`}
        >
          <div className="flex flex-row items-center gap-8">
            <Link
              href="/"
              className={`${showSearchBar ? 'hidden sm:flex' : 'flex'}`}
            >
              <Logo size={50} />
            </Link>
            <ul className="hidden md:flex flex-row items-center gap-4">
              <li
                onMouseEnter={() => {
                  setShopOpen(false);
                  setBlogOpen(false);
                  setShowSearchBar(false);
                  setSearchResults([]);
                }}
              >
                <NavLink href="/" exact>
                  <h4>HOME</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopOpen(true);
                  setBlogOpen(false);
                  setShowSearchBar(false);
                  setSearchResults([]);
                }}
              >
                <NavLink href="/shop">
                  <h4>SHOP</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopOpen(false);
                  setBlogOpen(true);
                  setShowSearchBar(false);
                  setSearchResults([]);
                }}
              >
                <NavLink href="/blog">
                  <h4>BLOG</h4>
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="flex flex-row items-center gap-4">
            {showSearchBar ? (
              <SearchBar
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                setShowSearchBar={setShowSearchBar}
              />
            ) : (
              <li
                onMouseEnter={() => {
                  setShopOpen(false);
                  setBlogOpen(false);
                  setShowSearchBar(true);
                }}
                className="clickable flex flex-col items-center"
              >
                <Search size={25} />
                <p>Search</p>
              </li>
            )}
            <li
              onMouseEnter={() => {
                setShopOpen(false);
                setBlogOpen(false);
                setShowSearchBar(false);
                setSearchResults([]);
              }}
              className={`clickable flex flex-col items-center ${
                showSearchBar ? 'hidden sm:flex' : 'flex'
              }`}
            >
              <Link href="/cart">
                <div className="relative">
                  {totalQuantities > 0 && (
                    <span className="absolute flex items-center justify-center right-[-4px] top-[-4px] bg-errorRed text-white w-5 h-5 rounded-full text-center font-semibold text-xs">
                      {totalQuantities}
                    </span>
                  )}
                  <Cart size={25} />
                  <p>Cart</p>
                </div>
              </Link>
            </li>
            <li
              onMouseEnter={() => {
                setShopOpen(false);
                setBlogOpen(false);
                setShowSearchBar(false);
                setSearchResults([]);
              }}
              onClick={() => setHamburgerOpen(true)}
              className={` clickable flex flex-col items-center ${
                showSearchBar ? 'hidden' : 'flex md:hidden'
              }`}
            >
              <HamburgerMenu size={25} />
              <p>Menu</p>
            </li>
          </ul>
        </nav>
        <div className="bg-gray w-screen h-0.5" />
        {shopOpen && !hamburgerOpen && <NavShop status={setShopOpen} />}
        {blogOpen && !hamburgerOpen && <NavBlog status={setBlogOpen} />}
      </header>
      {hamburgerOpen && <NavMobile status={setHamburgerOpen} />}
    </>
  );
};

export default NavBar;
