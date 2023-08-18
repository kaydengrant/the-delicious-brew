'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { client } from '../../../sanity/lib/client';
import {
  NavFooter,
  ProductBanner,
  Divider,
  VerticalBanner,
  LabelBanner,
  Loading,
} from '../../components';

const Shop: React.FC = () => {
  const [heroCurrentIndex, setHeroCurrentIndex] = useState(0);
  const [sanityProductBanners, setSanityProductBanners] = useState(null);
  const [sanityCategoryBanners, setSanityCategoryBanners] = useState(null);
  const [sanityBlogBanners, setSanityBlogBanners] = useState(null);
  const [sanityCreditBanners, setSanityCreditBanners] = useState(null);
  const [sanityDividers, setSanityDividers] = useState(null);

  useEffect(() => {
    const getSanityData = async () => {
      const productBannerQuery = '*[_type == "banner" && page == "shop-hero"]';
      const categoryBannerQuery =
        '*[_type == "banner" && page == "shop-category"]';
      const blogBannerQuery = '*[_type == "banner" && page == "shop-blog"]';
      const creditBannerQuery = '*[_type == "banner" && page == "shop-credit"]';
      const dividerQuery = '*[_type == "divider" && name == "testerimage"]';

      const productBanners = await client.fetch(productBannerQuery);
      const categoryBanners = await client.fetch(categoryBannerQuery);
      const blogBanners = await client.fetch(blogBannerQuery);
      const creditBanners = await client.fetch(creditBannerQuery);
      const dividers = await client.fetch(dividerQuery);

      setSanityProductBanners(productBanners);
      setSanityCategoryBanners(categoryBanners);
      setSanityBlogBanners(blogBanners);
      setSanityCreditBanners(creditBanners);
      setSanityDividers(dividers);
    };

    getSanityData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCurrentIndex(heroCurrentIndex + 1);
      if (heroCurrentIndex >= 2) {
        setHeroCurrentIndex(0);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [heroCurrentIndex]);

  if (
    !sanityProductBanners ||
    !sanityCategoryBanners ||
    !sanityBlogBanners ||
    !sanityCreditBanners ||
    !sanityDividers
  ) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-4">
          <div className="flex flex-row lg:flex-col gap-4">
            <button
              onClick={() => setHeroCurrentIndex(0)}
              className={`w-3 h-3 ${
                heroCurrentIndex == 0 ? 'bg-black' : 'bg-gray'
              } rounded-full clickable`}
            />
            <button
              onClick={() => setHeroCurrentIndex(1)}
              className={`w-3 h-3 ${
                heroCurrentIndex == 1 ? 'bg-black' : 'bg-gray'
              } rounded-full clickable`}
            />
            <button
              onClick={() => setHeroCurrentIndex(2)}
              className={`w-3 h-3 ${
                heroCurrentIndex == 2 ? 'bg-black' : 'bg-gray'
              } rounded-full clickable`}
            />
          </div>
          <div className="lg:flex-1">
            {sanityProductBanners
              .slice(heroCurrentIndex, heroCurrentIndex + 1)
              .map((item) => (
                <ProductBanner
                  key={item._id}
                  data={sanityProductBanners[heroCurrentIndex]}
                  direction="left"
                  color={
                    heroCurrentIndex % 3 == 0
                      ? 'bg-blue'
                      : heroCurrentIndex % 3 == 1
                      ? 'bg-green'
                      : 'bg-brown'
                  }
                />
              ))}
          </div>
        </div>
      </section>
      <Divider data={sanityDividers[0]} />
      <section>
        <h2 className="text-center md:text-left mb-6 md:mb-0">
          Browse Our Top Categories
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {sanityCategoryBanners.map((item) => (
            <Link key={item._id} href={`/shop/products`}>
              <VerticalBanner data={item} />
            </Link>
          ))}
        </div>
      </section>
      <ProductBanner
        data={sanityCreditBanners[0]}
        direction="right"
        color="bg-green"
        flipText
      />
      <section>
        <h2 className="text-center md:text-left">
          Explore Trending Blog Posts
        </h2>
        <div className="flex flex-row items-center overflow-x-auto gap-x-4 scrollbar snap-x">
          {sanityBlogBanners.map((item) => {
            return (
              <div key={item._id} className="snap-start">
                <LabelBanner data={item} />
              </div>
            );
          })}
        </div>
      </section>
      <NavFooter />
    </>
  );
};

export default Shop;
