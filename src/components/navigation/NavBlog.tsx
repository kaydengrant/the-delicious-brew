import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Close, Cone, MugHot, navBarExtendedAnim } from '../../utils';
import { DonationButton, OutlineButton } from '../../components';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogNav: React.FC<Props> = ({ status }) => {
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
            <Link href="/blog">
              <h4 className="clickable italic font-normal underline underline-offset-4">
                View All
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
            <div className="flex flex-col items-center gap-2">
              <Cone size={100} />
              <h4>Under Construction</h4>
            </div>
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

export default BlogNav;
