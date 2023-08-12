import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Slug } from 'sanity';
import { ImArrowRight2 } from 'react-icons/im';

import { urlForImage } from '../../../sanity/lib/client';
import { OutlineButton } from '../../components';

type Props = {
  data: {
    image: any;
    title: string;
    subTitle: string;
    slug: Slug;
  };
  direction: 'left' | 'right';
  color: string;
};

const TitleBanner: React.FC<Props> = ({ data, direction, color }) => {
  const [link, setLink] = useState('');
  const img = urlForImage(data.image).width(1400).url();

  useEffect(() => {
    const handleLink = () => {
      switch (data.slug.current) {
        case 'shop':
          setLink('/shop');
          break;
        case 'blog':
          setLink('/blog');
          break;
      }
    };

    handleLink();
  }, [data]);

  return (
    <section
      className={`flex ${
        direction === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col-reverse justify-center lg:justify-between items-center gap-6 ${color} rounded-2xl p-6 drop-shadow-md`}
    >
      <div
        className={`flex flex-col lg:max-w-[45%] ${
          direction === 'left'
            ? 'text-center lg:text-right'
            : 'text-center lg:text-left'
        } gap-2`}
      >
        <h4>{data.subTitle}</h4>
        <h1 className="hidden sm:flex">{data.title}</h1>
        <div
          className={`flex flex-row ${
            direction === 'left'
              ? 'justify-center lg:justify-end'
              : 'justify-center lg:justify-start'
          }`}
        >
          <Link href={link}>
            <OutlineButton text={`Visit Shop`} Icon={ImArrowRight2} />
          </Link>
        </div>
      </div>
      <div className="w-full min-h-[250px] md:h-full relative pt-[35%] ">
        <Image
          loader={() => img}
          src={img}
          alt="Title banner image"
          className="border-4 border-white rounded-xl object-cover"
          fill
          unoptimized
          priority
        />
      </div>
    </section>
  );
};

export default TitleBanner;
