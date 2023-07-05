'use client';
import React from 'react';

import { client } from '../../sanity/lib/client';
import { NavBar, Footer, TitleBanner, ShopFooter } from '../components';

const getData = async () => {
  const query = '*[_type == "titleBanner"]';
  const banners = await client.fetch(query);

  return {
    props: { banners },
  };
};

const Home = async () => {
  const bannerData = await getData();

  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <TitleBanner
            data={
              bannerData.props.banners.length && bannerData.props.banners[0]
            }
            direction="left"
            link="shop"
            color="bg-green"
          />
          <TitleBanner
            data={
              bannerData.props.banners.length && bannerData.props.banners[1]
            }
            direction="right"
            link="blog"
            color="bg-brown"
          />
        </section>
        <ShopFooter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
