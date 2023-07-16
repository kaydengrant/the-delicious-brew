'use client';
import React from 'react';

import { client } from '../../../sanity/lib/client';
import { Footer, NavBar, NavFooter, ProductBanner } from '../../components';

const getSanityData = async () => {
  const bannerQuery = '*[_type == "banner" && page == "shop-hero"]';
  const banners = await client.fetch(bannerQuery);

  return {
    props: { banners },
  };
};

const Shop: React.FC = async () => {
  const sanityData = await getSanityData();

  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <h1>Shop here</h1>
          <ProductBanner data={sanityData.props.banners[0]} color="bg-blue" />
        </section>
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
