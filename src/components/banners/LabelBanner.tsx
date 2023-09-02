import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ColorValue } from '@sanity/color-input';

import { ArrowRight } from '../../utils';
import { urlForImage } from '../../../sanity/lib/client';

type Props = {
  data: {
    image: any;
    title: string;
    subTitle: string;
    slug: string;
    color: ColorValue;
  };
};

const LabelBanner: React.FC<Props> = ({ data }) => {
  const img = useMemo(() => {
    if (!data) return '';
    return urlForImage(data.image).width(1000).url();
  }, [data]);

  return (
    <section className="flex flex-col items-center rounded-2xl drop-shadow-md w-[200px] h-[125px] sm:w-[325px] sm:h-[250px]">
      <div className="w-full h-full relative ">
        <Image
          loader={() => img}
          src={img}
          alt="Label banner image"
          className="drop-shadow-xl rounded-t-xl object-cover"
          loading="lazy"
          fill
          unoptimized
        />
      </div>
      <div
        style={{ backgroundColor: data.color.hex }}
        className="flex flex-row justify-between items-end w-full p-2 rounded-b-xl h-24"
      >
        <div className="flex flex-col justify-around w-[80%] sm:h-20 gap-2">
          <h4 className="text-white truncate">{data.title}</h4>
          <p className="hidden sm:flex text-white text-clip leading-tight font-light">
            {data.subTitle}
          </p>
        </div>
        <Link href={'/blog'}>
          <ArrowRight className="clickable text-white" size={30} />
        </Link>
      </div>
    </section>
  );
};

export default LabelBanner;
