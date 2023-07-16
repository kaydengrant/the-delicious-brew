'use client';
import React from 'react';

import { client } from '../../sanity/lib/client';
import { NavBar, Footer, TitleBanner, NavFooter, Divider } from '../components';

const getSanityData = async () => {
  const bannerQuery = '*[_type == "banner" && page == "home"]';
  const dividerQuery = '*[_type == "divider" && name == "testerimage"]';
  const banners = await client.fetch(bannerQuery);
  const divider = await client.fetch(dividerQuery);

  return {
    props: { banners, divider },
  };
};

const Home = async () => {
  const sanityData = await getSanityData();

  return (
    <>
      <NavBar />
      <div className="content-container">
        <TitleBanner
          data={sanityData.props.banners[0]}
          direction="left"
          link="shop"
          color="bg-green"
        />
        <Divider data={sanityData.props.divider[0]} />
        <TitleBanner
          data={sanityData.props.banners[1]}
          direction="right"
          link="blog"
          color="bg-brown"
        />
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
