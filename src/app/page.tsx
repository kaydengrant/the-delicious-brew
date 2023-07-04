'use client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/navigation/NavBar';
import Shop from '../pages/shop/Shop';
import Footer from '@/components/Footer';
import AllProducts from '@/pages/shop/AllProducts';

export default function Home() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="content-container">
        <Routes>
          <Route
            path=""
            element={
              <div className="flex flex-row justify-start items-start">
                Hello World!
              </div>
            }
          />
          <Route path="shop" element={<Shop />}>
            <Route path="espresso" element={<AllProducts />} />
            <Route path="espresso/machines" />
            <Route path="espresso/accessories" />
            <Route path="espresso/beans" />
            <Route path="drip" />
            <Route path="drip/machines" />
            <Route path="drip/accessories" />
            <Route path="drip/beans" />
            <Route path="pourover" />
            <Route path="pourover/brewers" />
            <Route path="pourover/accessories" />
            <Route path="pourover/beans" />
            <Route path="press" />
            <Route path="press/brewers" />
            <Route path="press/accessories" />
            <Route path="press/beans" />
            <Route path="beans" />
            <Route path="beans/whole" />
            <Route path="beans/ground" />
            <Route path="accessories" />
            <Route path="accessories/grinders" />
            <Route path="accessories/cleaning" />
            <Route path="accessories/filters" />
            <Route path="accessories/espresso" />
            <Route path="accessories/kettles" />
            <Route path="accessories/cups" />
            <Route path="accessories/measuring" />
          </Route>
          <Route path="blog" element={<h1>BLOG GOES HERE</h1>} />
          <Route path="about" element={<h1>ABOUT GOES HERE</h1>} />
          <Route path="cart" element={<h1>CART GOES HERE</h1>} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
