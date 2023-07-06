import React, { useState } from 'react';
import Link from 'next/link';
import { FaMugHot } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';

import { OutlineButton } from '../../components';
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

type NavScreenType =
  | 'home'
  | 'shop'
  | 'shop-espresso'
  | 'shop-drip'
  | 'shop-pourover'
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
      <div className="absolute right-0 top-0 flex flex-col items-center w-[80%] h-screen z-50 bg-white px-10 py-4 gap-10">
        <div
          onClick={() => status(false)}
          className="clickable flex flex-col self-end items-center"
        >
          <GrClose size={20} />
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
                <p>About Delicious Brew</p>
              </li>
              <li>
                <Link href="/about">
                  <OutlineButton text="Buy me a Coffee" Icon={FaMugHot} />
                </Link>
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
    case 'shop-espresso':
    case 'shop-drip':
    case 'shop-pourover':
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
          <LiaAngleRightSolid size={20} className="text-gray" />
        </Link>
      </li>
      <li
        onClick={() => setScreen('shop')}
        className="flex flex-row justify-between items-center"
      >
        <h4>SHOP</h4>
        <LiaAngleRightSolid size={20} className="text-gray" />
      </li>
      <li
        onClick={() => setScreen('blog')}
        className="flex flex-row justify-between items-center"
      >
        <h4>BLOG</h4>
        <LiaAngleRightSolid size={20} className="text-gray" />
      </li>
    </>
  );
};

const NavMobileShop: React.FC<ShopProps> = ({ setScreen, setLinks }) => {
  return (
    <div className="flex flex-col gap-6">
      <li onClick={() => setScreen('home')}>
        <div className="flex flex-row justify-start items-center gap-6">
          <LiaAngleLeftSolid size={20} className="text-gray" />
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
            <LiaAngleRightSolid size={20} className="text-gray" />
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
          <LiaAngleLeftSolid size={20} className="text-gray" />
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

export default NavMobile;
