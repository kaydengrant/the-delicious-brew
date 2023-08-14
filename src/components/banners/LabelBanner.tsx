import React from 'react';
import Image from 'next/image';
import { ColorValue } from '@sanity/color-input';

import { ArrowRight } from '../../utils/icons';
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
  const img = urlForImage(data.image).width(1000).url();

  return (
    <section className="flex flex-col items-center rounded-2xl drop-shadow-md w-[325px] h-[250px]">
      <div className="w-full h-full relative ">
        <Image
          loader={() => img}
          src={img}
          alt="Label banner image"
          className="drop-shadow-xl rounded-t-xl object-cover"
          fill
          unoptimized
          priority
        />
      </div>
      <div
        style={{ backgroundColor: data.color.hex }}
        className="flex flex-row justify-between items-end w-full p-2 rounded-b-xl h-24"
      >
        <div className="flex flex-col justify-around w-[80%] h-20 gap-2">
          <h4 className="text-white truncate">{data.title}</h4>
          <p className="text-white text-clip leading-tight font-light">
            {data.subTitle}
          </p>
        </div>
        <ArrowRight className="clickable text-white" size={30} />
      </div>
    </section>
  );
};

export default LabelBanner;
