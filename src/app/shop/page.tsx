'use client';
import React from 'react';

import { Footer, NavBar, NavFooter } from '../../components';

const Shop: React.FC = async () => {
  return (
    <>
      <NavBar />
      <div className="content-container">
        <section>
          <h1>Shop here</h1>
        </section>
        <NavFooter />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
