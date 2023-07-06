import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  link?: 'shop' | 'blog';
  color: string;
};

const TitleBanner: React.FC<Props> = ({ data, direction, link, color }) => {
  const img = urlForImage(data.image).width(500).url();

  return (
    <section
      className={`flex ${
        direction === 'left'
          ? 'flex-col-reverse lg:flex-row'
          : 'flex-col lg:flex-row-reverse'
      } justify-center lg:justify-between items-center gap-6 ${color} rounded-2xl p-6`}
    >
      <div
        className={`flex flex-col lg:max-w-[45%] ${
          direction === 'left'
            ? 'text-center lg:text-right'
            : 'text-center lg:text-left'
        } gap-2`}
      >
        <h4>{data.subTitle}</h4>
        <h1>{data.title}</h1>
        <div
          className={`flex flex-row ${
            direction === 'left'
              ? 'justify-center lg:justify-end'
              : 'justify-center lg:justify-start'
          }`}
        >
          {link === 'shop' && (
            <Link href="/shop">
              <OutlineButton text={`Visit Shop`} Icon={ImArrowRight2} />
            </Link>
          )}
          {link === 'blog' && (
            <Link href="/blog">
              <OutlineButton text={`Visit Blog`} Icon={ImArrowRight2} />
            </Link>
          )}
        </div>
      </div>
      <Image
        loader={() => img}
        src={img}
        width={500}
        height={500}
        alt="image"
        className="border-4 border-white rounded-xl"
        unoptimized
      />
    </section>
  );
};

export default TitleBanner;
