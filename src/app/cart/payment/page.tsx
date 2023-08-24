'use client';
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import {
  OutlineButton,
  DonationButton,
  InViewAnimationWrapper,
} from '../../../components';
import { MugHot } from '../../../utils';
import { useStateContext } from '../../../context/StateContext';
import { urlForImage } from '../../../../sanity/lib/client';

const Payment: React.FC = () => {
  const { cartItems } = useStateContext();

  return (
    <InViewAnimationWrapper>
      <section className="flex flex-col items-center text-center gap-4">
        <h1>Sorry, this is only a portfolio project.</h1>
        <h3>
          While the items are real, you cannot purchase them through The
          Delicious Brew
        </h3>
        <p>
          If you are still interested in purchasing the product, I recommend
          visiting the official site of the product you want to purchase. If you
          liked this website and are feeling generous, please consider buying me
          a coffee. Thank you :)
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <DonationButton>
            <OutlineButton text="Buy me a Coffee" Icon={MugHot} />
          </DonationButton>
          <DonationButton />
        </div>
        <h3 className="items-start mt-10">Your Cart Item(s)</h3>
        {cartItems.length > 1 ? (
          <Marquee autoFill>
            {cartItems.map((item: any, index: number) => {
              const img = urlForImage(item.image[0]).width(1000).url();

              return (
                <div
                  key={item._id}
                  className="flex flex-col gap-2 max-w-[200px] mx-2"
                >
                  <div
                    className={`flex relative rounded-xl w-[200px] h-[200px] min-w-[200px] min-h-[200px] p-2 drop-shadow-sm ${
                      index % 3 == 0
                        ? 'bg-blue'
                        : index % 3 == 1
                        ? 'bg-green'
                        : 'bg-brown'
                    }`}
                  >
                    <Image
                      loader={() => img}
                      src={img}
                      alt="Product banner image"
                      className="drop-shadow-xl object-contain"
                      loading="lazy"
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <p className="truncate">{item.name}</p>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </Marquee>
        ) : (
          <div className="flex flex-row">
            {cartItems.map((item: any, index: number) => {
              const img = urlForImage(item.image[0]).width(1000).url();

              return (
                <div
                  key={item._id}
                  className="flex flex-col gap-2 max-w-[200px] mx-2"
                >
                  <div
                    className={`flex relative rounded-xl w-[200px] h-[200px] min-w-[200px] min-h-[200px] p-2 drop-shadow-sm ${
                      index % 3 == 0
                        ? 'bg-blue'
                        : index % 3 == 1
                        ? 'bg-green'
                        : 'bg-brown'
                    }`}
                  >
                    <Image
                      loader={() => img}
                      src={img}
                      alt="Product banner image"
                      className="drop-shadow-xl object-contain"
                      loading="lazy"
                      fill
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col text-start">
                    <p className="truncate">{item.name}</p>
                    <p className="font-semibold">${item.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </InViewAnimationWrapper>
  );
};

export default Payment;
