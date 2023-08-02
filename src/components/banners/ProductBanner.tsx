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
  color: string;
};

const ProductBanner: React.FC<Props> = ({ data, color }) => {
  const img = urlForImage(data.image).width(1000).url();

  return (
    <section
      className={`flex flex-col-reverse md:flex-row justify-center md:justify-between items-center ${color} rounded-2xl px-6 sm:px-10 py-6 drop-shadow-md md:h-72`}
    >
      <div className="flex flex-col lg:max-w-[45%] gap-4 text-center lg:text-left">
        <h3>{data.subTitle}</h3>
        <h1 className="hidden sm:flex">{data.title}</h1>
        <span className="flex justify-center lg:justify-start">
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
