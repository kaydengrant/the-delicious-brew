import React from 'react';
import Image from 'next/image';
import { ImArrowRight2 } from 'react-icons/im';

import { urlForImage } from '../../../sanity/lib/client';
import { OutlineButton } from '../../components';

type Props = {
  data: {
    image: any;
    title: string;
    subTitle: string;
    details: string;
    slug: string;
  };
  direction: 'left' | 'right';
  flipText?: boolean;
  color: string;
};

const ProductBanner: React.FC<Props> = ({
  data,
  direction,
  flipText,
  color,
}) => {
  const img = urlForImage(data.image).width(1000).url();

  return (
    <section
      className={`flex flex-col-reverse ${
        direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }  justify-center md:justify-between items-center ${color} rounded-2xl px-6 sm:px-10 py-6 drop-shadow-md md:h-72`}
    >
      <div
        className={`flex flex-col lg:max-w-[55%] gap-4 text-center ${
          direction === 'left' ? 'lg:text-left' : 'lg:text-right'
        }`}
      >
        <div
          className={`flex ${
            flipText === true ? 'flex-col-reverse' : 'flex-col'
          }`}
        >
          <h3>{data.subTitle}</h3>
          <h1 className="hidden sm:flex">{data.title}</h1>
        </div>
        <span
          className={`flex justify-center ${
            direction === 'left' ? 'lg:justify-start' : 'lg:justify-end'
          }`}
        >
          <OutlineButton text="Shop Now" Icon={ImArrowRight2} />
        </span>
      </div>
      <Image
        loader={() => img}
        src={img}
        alt="Product banner image"
        width={250}
        height={250}
        className="drop-shadow-xl"
        unoptimized
        priority
      />
    </section>
  );
};

export default ProductBanner;
