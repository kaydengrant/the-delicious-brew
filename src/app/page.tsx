'use client';
import React, { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import { client } from '../../sanity/lib/client';
import { TitleBanner, NavFooter, Divider } from '../components';

const Home = () => {
  const [sanityBanners, setSanityBanners] = useState(null);
  const [sanityDividers, setSanityDividers] = useState(null);

  useEffect(() => {
    const getSanityData = async () => {
      const bannerQuery = '*[_type == "banner" && page == "home"]';
      const dividerQuery = '*[_type == "divider" && name == "testerimage"]';
      const banners = await client.fetch(bannerQuery);
      const dividers = await client.fetch(dividerQuery);
      setSanityBanners(banners);
      setSanityDividers(dividers);
    };

    getSanityData();
  }, []);

  if (!sanityBanners || !sanityDividers) {
    return <Loading />;
  }

  return (
    <>
      <TitleBanner data={sanityBanners[0]} direction="left" color="bg-green" />
      <Divider data={sanityDividers[0]} />
      <TitleBanner data={sanityBanners[1]} direction="right" color="bg-brown" />
      <NavFooter />
    </>
  );
};

export default Home;
