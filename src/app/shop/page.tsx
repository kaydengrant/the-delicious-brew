'use client';
import React, { useEffect, useState } from 'react';

import Loading from '../loading/page';
import { client } from '../../../sanity/lib/client';
import { Footer, NavBar, NavFooter, ProductBanner } from '../../components';

const Shop: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sanityBanners, setSanityBanners] = useState<any>();

  useEffect(() => {
    const getSanityData = async () => {
      const bannerQuery = '*[_type == "banner" && page == "shop-hero"]';
      const banners = await client.fetch(bannerQuery);
      setSanityBanners(banners);
    };

    getSanityData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex >= 2) {
        setCurrentIndex(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!sanityBanners) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-4">
            <div className="flex flex-row lg:flex-col gap-4">
              <button
                onClick={() => setCurrentIndex(0)}
                className={`w-3 h-3 ${
                  currentIndex == 0 ? 'bg-black' : 'bg-gray'
                } rounded-full clickable`}
              />
              <button
                onClick={() => setCurrentIndex(1)}
                className={`w-3 h-3 ${
                  currentIndex == 1 ? 'bg-black' : 'bg-gray'
                } rounded-full clickable`}
              />
              <button
                onClick={() => setCurrentIndex(2)}
                className={`w-3 h-3 ${
                  currentIndex == 2 ? 'bg-black' : 'bg-gray'
                } rounded-full clickable`}
              />
            </div>
            <div className="lg:flex-1">
              {sanityBanners.slice(currentIndex, currentIndex + 1).map(() => (
                <ProductBanner
                  key={0}
                  data={sanityBanners[currentIndex]}
                  color={
                    currentIndex % 3 == 0
                      ? 'bg-blue'
                      : currentIndex % 3 == 1
                      ? 'bg-green'
                      : 'bg-brown'
                  }
                />
              ))}
            </div>
          </div>
        </section>
        {/**divider */}
        <section>
          <h2>Browse Our Top Categories</h2>
        </section>
        {/**credit card offer */}
        <section>
          <h2>Explore Trending Blog Posts</h2>
        </section>
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
