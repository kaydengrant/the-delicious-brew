import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import Link from 'next/link';

import { client, urlForImage } from '../../sanity/lib/client';
import { Loading } from '../components';

type Props = {
  category: string;
};

const SimilarProducts: React.FC<Props> = ({ category }) => {
  const [sanityRelatedProducts, setSanityRelatedProducts] = useState<
    any[] | null
  >(null);

  useEffect(() => {
    const getSanityData = async () => {
      const productQuery =
        '*[_type == "product" && "' + category + '" in category]';
      const relatedProducts = await client.fetch(productQuery);

      setSanityRelatedProducts(relatedProducts);
    };

    getSanityData();
  }, []);

  if (!sanityRelatedProducts) {
    return <Loading />;
  }

  return (
    <>
      <div className="bg-gray h-0.5" />
      <section className="flex flex-col gap-6">
        <h3>Similar Products</h3>
        <Marquee pauseOnHover autoFill>
          {sanityRelatedProducts.slice(0, 6).map((item: any, index: number) => {
            const img = urlForImage(item.image[0]).width(1000).url();

            return (
              <Link
                key={item._id}
                href={`/shop/products/${category}/${item._id}`}
                className="flex flex-col gap-2 max-w-[200px] mx-2"
              >
                <div
                  className={`flex relative rounded-xl w-[200px] h-[200px] min-w-[200px] min-h-[200px] p-2 drop-shadow-sm border-2 border-gray ${
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
                <div className="flex flex-col">
                  <p className="truncate">{item.name}</p>
                  <p className="font-semibold">${item.price}</p>
                </div>
              </Link>
            );
          })}
        </Marquee>
      </section>
    </>
  );
};

export default SimilarProducts;
