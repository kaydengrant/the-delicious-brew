'use client';
import React from 'react';

import { Footer, NavBar, ShopFooter } from '../../components';

const Shop: React.FC = async () => {
  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <h1>Shop here</h1>
        </section>
        <ShopFooter />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
