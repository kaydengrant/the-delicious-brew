import React from 'react';
import { Outlet } from 'react-router-dom';

import ShopFooter from '@/components/ShopFooter';

const Shop: React.FC = () => {
  return (
    <section>
      <h1>Shop here</h1>
      <Outlet />
      <ShopFooter />
    </section>
  );
};

export default Shop;
