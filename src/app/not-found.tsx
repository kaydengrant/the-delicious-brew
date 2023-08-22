'use client';
import React from 'react';
import Link from 'next/link';

import { Error, ArrowRight } from '../utils/icons';
import { OutlineButton } from '../components';

const Custom404: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white gap-4 text-center">
      <h1 className="text-errorRed">404 Not Found</h1>
      <Error size={125} className="text-errorRed" />
      <h4>The page that you are attempting to access does not exist.</h4>
      <Link href={'/'}>
        <OutlineButton
          text="Visit The Delicious Brew"
          Icon={ArrowRight}
          fillContainer
        />
      </Link>
    </div>
  );
};

export default Custom404;
