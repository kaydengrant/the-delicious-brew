import React from 'react';
import Image from 'next/image';

import { urlForImage } from '../../sanity/lib/client';

type Props = {
  data: {
    image: any;
  };
};

const Divider: React.FC<Props> = ({ data }) => {
  const img = urlForImage(data.image).width(2000).url();

  return (
    <section className="h-[200px]">
      <div className="absolute left-0 right-0 h-[200px]">
        <Image
          loader={() => img}
          src={img}
          alt="Divider image"
          className="object-cover"
          fill
          unoptimized
        />
      </div>
    </section>
  );
};

export default Divider;
