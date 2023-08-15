'use client';
import React from 'react';

import { OutlineButton, DonationButton } from '../../../components';
import { MugHot } from '../../../utils/icons';

const Payment = () => {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <h1>Sorry, this is only a portfolio project.</h1>
      <h2>
        {' '}
        While the items are real, you cannot purchase them through
        TheDeliciousBrew.com
      </h2>
      <p>
        If you are still interested in purchasing the product, I recommend
        visiting the official site of the product you want to purchase. If you
        liked this website and are feeling generous, please consider buying me a
        coffee. Thank you :)
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <DonationButton>
          <OutlineButton text="Buy me a Coffee" Icon={MugHot} />
        </DonationButton>
        <DonationButton />
      </div>
    </section>
  );
};

export default Payment;
