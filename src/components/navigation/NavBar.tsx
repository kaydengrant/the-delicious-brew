import React, { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';
import { GrSearch, GrCart } from 'react-icons/gr';
import { NavLink, Link } from 'react-router-dom';

import ShopNav from './ShopNav';
import BlogNav from './BlogNav';

const NavBar: React.FC = () => {
  const [shopHover, setShopHover] = useState(false);
  const [blogHover, setBlogHover] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center w-screen bg-white z-50">
        <nav className="flex flex-row w-full lg:w-[1000px] justify-between px-4">
          <div className="flex flex-row items-center gap-8">
            <FaCoffee size={50} />
            <ul className="flex flex-row items-center gap-4">
              <li
                onMouseEnter={() => {
                  setShopHover(false), setBlogHover(false);
                }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-4' : 'none'
                  }
                >
                  <h4>HOME</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopHover(true), setBlogHover(false);
                }}
              >
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-4' : 'none'
                  }
                >
                  <h4>SHOP</h4>
                </NavLink>
              </li>
              <li
                onMouseEnter={() => {
                  setShopHover(false), setBlogHover(true);
                }}
              >
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? 'underline underline-offset-4' : 'none'
                  }
                >
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
              <Link to="/cart" className="clickable flex flex-col items-center">
                <GrCart size={25} />
                <p>Cart</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bg-gray w-screen h-0.5" />
      </div>
      {shopHover && <ShopNav status={setShopHover} />}
      {blogHover && <BlogNav status={setBlogHover} />}
    </>
  );
};

export default NavBar;
