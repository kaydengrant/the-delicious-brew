import React from 'react';
import { FaCoffee, FaMugHot } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import OutlineButton from './OutlineButton';

const ShopFooter: React.FC = () => {
  return (
    <section className="flex flex-col justify-center w-full">
      <div className=" bg-gray h-0.5" />
      <div className="flex flex-row justify-between px-2 py-4">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-6">
            <FaCoffee size={50} />
            <h3>Delicious Brew</h3>
          </div>
          <p>Your Gateway to Coffee Excellence.</p>
        </div>
        <nav className="flex flex-row">
          <ul className="flex flex-col">
            <li className="clickable">
              <Link to="/shop">
                <h4>SHOP</h4>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/espresso">
                <p>Espresso</p>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/drip">
                <p>Drip</p>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/pourover">
                <p>Pour Over</p>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/press">
                <p>Press</p>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/beans">
                <p>Beans</p>
              </Link>
            </li>
            <li className="clickable">
              <Link to="/shop/accessories">
                <p>Additional Tools & Accessories</p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li className="clickable">
              <Link to="/about">
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
  );
};

export default ShopFooter;
