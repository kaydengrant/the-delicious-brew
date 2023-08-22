import React, { useState } from 'react';
import Link from 'next/link';

import { MugHot, Close, AngleLeft, AngleRight, Cone } from '../../utils';
import { DonationButton, OutlineButton } from '../../components';
import { categories } from './NavShop';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

type RenderProps = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<any>>;
  current: NavScreenType;
  links: any;
  setLinks: React.Dispatch<React.SetStateAction<any>>;
};

type HomeProps = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<any>>;
};

type ShopProps = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<any>>;
  links: any;
  setLinks: React.Dispatch<React.SetStateAction<any>>;
};

type BlogProps = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
  setScreen: React.Dispatch<React.SetStateAction<any>>;
};

type NavScreenType =
  | 'home'
  | 'shop'
  | 'shop-espresso'
  | 'shop-drip'
  | 'shop-pour-over'
  | 'shop-press'
  | 'shop-beans'
  | 'shop-accessories'
  | 'blog';

const NavMobile: React.FC<Props> = ({ status }) => {
  const [navsetScreen, setNavsetScreen] = useState<NavScreenType>('home');
  const [links, setLinks] = useState([categories[0]]);

  return (
    <>
      <div className="absolute inset-0 opacity-90 z-50 bg-black " />
      <div className="fixed right-0 top-0 flex flex-col items-center w-[80%] h-screen z-50 bg-white px-10 py-4 gap-10">
        <div
          onClick={() => status(false)}
          className="clickable flex flex-col self-end items-center"
        >
          <Close size={20} />
          <p>Close</p>
        </div>
        <div className="w-full no-scrollbar overflow-y-scroll">
          <nav className="flex flex-col z-50 w-full items-center gap-6">
            <ul className="flex w-full flex-col gap-2">
              {
                <RenderNavScreen
                  status={status}
                  setScreen={setNavsetScreen}
                  current={navsetScreen}
                  links={links}
                  setLinks={setLinks}
                />
              }
            </ul>
            <div className="bg-gray h-0.5 w-full" />
            <ul className="flex w-full flex-col gap-1">
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
          </nav>
        </div>
      </div>
    </>
  );
};

const RenderNavScreen: React.FC<RenderProps> = ({
  status,
  setScreen,
  current,
  links,
  setLinks,
}) => {
  switch (current) {
    case 'home':
      return <NavMobileHome status={status} setScreen={setScreen} />;
    case 'shop':
      return (
        <NavMobileShop
          status={status}
          setScreen={setScreen}
          links={links}
          setLinks={setLinks}
        />
      );
    case 'blog':
      return <NavMobileBlog status={status} setScreen={setScreen} />;
    case 'shop-espresso':
    case 'shop-drip':
    case 'shop-pour-over':
    case 'shop-press':
    case 'shop-beans':
    case 'shop-accessories':
      return (
        <NavMobileShopExtended
          status={status}
          setScreen={setScreen}
          links={links}
          setLinks={setLinks}
        />
      );
  }
};

const NavMobileHome: React.FC<HomeProps> = ({ status, setScreen }) => {
  return (
    <>
      <li onClick={() => status(false)}>
        <Link href="/" className="flex flex-row justify-between items-center">
          <h4>HOME</h4>
          <AngleRight size={20} className="text-gray" />
        </Link>
      </li>
      <li
        onClick={() => setScreen('shop')}
        className="flex flex-row justify-between items-center"
      >
        <h4>SHOP</h4>
        <AngleRight size={20} className="text-gray" />
      </li>
      <li
        onClick={() => setScreen('blog')}
        className="flex flex-row justify-between items-center"
      >
        <h4>BLOG</h4>
        <AngleRight size={20} className="text-gray" />
      </li>
    </>
  );
};

const NavMobileShop: React.FC<ShopProps> = ({ setScreen, setLinks }) => {
  return (
    <div className="flex flex-col gap-6">
      <li onClick={() => setScreen('home')}>
        <div className="flex flex-row justify-start items-center gap-6">
          <AngleLeft size={20} className="text-gray" />
          <h4>SHOP</h4>
        </div>
      </li>
      <div className="bg-gray h-0.5 w-full" />
      <ul className="flex flex-col gap-2">
        {categories.map((category, index) => (
          <li
            key={category.key}
            onClick={() => {
              setScreen(`shop-${category.name}`), setLinks([categories[index]]);
            }}
            className="flex flex-row justify-between items-center"
          >
            {category.title}
            <AngleRight size={20} className="text-gray" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavMobileShopExtended: React.FC<ShopProps> = ({
  status,
  setScreen,
  links,
  setLinks,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <li
        onClick={() => {
          setScreen('shop'), setLinks([categories[0]]);
        }}
      >
        <Link
          href="/"
          className="flex flex-row justify-start items-center gap-6"
        >
          <AngleLeft size={20} className="text-gray" />
          <h4>{links[0].title.toUpperCase()}</h4>
        </Link>
      </li>
      <div className="bg-gray h-0.5 w-full" />
      <ul className="flex flex-col gap-2">
        {links.map((category: any) => (
          <>
            {category.links.map((link: any) => (
              <li key={link.key} onClick={() => status(false)}>
                <Link
                  href={link.to}
                  className="flex flex-row justify-between items-center"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </>
        ))}
      </ul>
    </div>
  );
};

const NavMobileBlog: React.FC<BlogProps> = ({ status, setScreen }) => {
  return (
    <div className="flex flex-col gap-6">
      <li onClick={() => setScreen('home')}>
        <div className="flex flex-row justify-start items-center gap-6">
          <AngleLeft size={20} className="text-gray" />
          <h4>BLOG</h4>
        </div>
      </li>
      <div className="bg-gray h-0.5 w-full" />
      <ul className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 text-center">
          <Cone size={75} />
          <h4>Under Construction</h4>
        </div>
      </ul>
    </div>
  );
};

export default NavMobile;
