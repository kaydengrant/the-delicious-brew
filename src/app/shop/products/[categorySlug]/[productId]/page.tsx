'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { client, urlForImage } from '../../../../../../sanity/lib/client';
import { NavBar, NavFooter, Footer } from '../../../../../components';
import Loading from '../../../../loading/page';

const capitalizeString = (string: string) => {
  const substrings = string.split(/[-\s]+/);
  const capitalizedSubstrings = substrings.map((substring) => {
    return substring.charAt(0).toUpperCase() + substring.slice(1).toLowerCase();
  });

  return capitalizedSubstrings.join(' ');
};

const ProductFocused: React.FC = () => {
  const [sanityProduct, setSanityProduct] = useState(null);

  const pathname = usePathname().split('/');
  const productId = pathname[pathname.length - 1];

  const capitalizedPathname = capitalizeString(
    pathname.join(' / ').substring(3)
  );

  useEffect(() => {
    const getSanityData = async () => {
      const productQuery =
        '*[_type == "product" && _id == "' + productId + '"]';
      const product = await client.fetch(productQuery);
      setSanityProduct(product);
    };

    getSanityData();
  }, []);

  if (!sanityProduct) {
    return <Loading />;
  }

  const img = urlForImage(sanityProduct[0].image[0]).width(1000).url();

  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <p>{capitalizedPathname}</p>
          <section className="flex flex-col bg-errorRed w-[400px] h-[400px] rounded-xl p-2 drop-shadow-xl">
            <div className="flex w-full h-full relative rounded-xl">
              <Image
                loader={() => img}
                src={img}
                alt="Product focused image"
                className="drop-shadow-xl object-contain"
                fill
                unoptimized
                priority
              />
            </div>
          </section>
        </section>
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default ProductFocused;
