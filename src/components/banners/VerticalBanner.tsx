import React, { useMemo } from 'react';
import Image from 'next/image';
import { ColorValue } from '@sanity/color-input';

import { urlForImage } from '../../../sanity/lib/client';

type Props = {
  data: {
    image: any;
    title: string;
    slug: string;
    color: ColorValue;
  };
};

const VerticalBanner: React.FC<Props> = ({ data }) => {
  const img = useMemo(() => {
    if (!data) return '';
    return urlForImage(data.image).width(1000).url();
  }, [data]);

  return (
    <section className="flex flex-col items-center rounded-2xl drop-shadow-md clickable w-44 lg:w-56 md:h-[300px] my-0 md:my-8">
      <div
        style={{ backgroundColor: data.color.hex }}
        className="flex justify-center w-full py-4 md:py-2 rounded-xl md:rounded-t-xl md:rounded-b-none"
      >
        <h4 className="text-white">{data.title}</h4>
      </div>
      <div className="none md:flex w-full h-full relative">
        <Image
          loader={() => img}
          src={img}
          alt="Vertical banner image"
          className="drop-shadow-xl rounded-b-xl object-cover"
          loading="lazy"
          fill
          unoptimized
        />
      </div>
    </section>
  );
};

export default VerticalBanner;
