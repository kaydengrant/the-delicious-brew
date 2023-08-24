'use client';
import React from 'react';
import Link from 'next/link';

import { addCommasToNumber, CreditCard, RemoveShoppingCart } from '../../utils';
import {
  CartItem,
  InViewAnimationWrapper,
  OutlineButton,
} from '../../components';
import { useStateContext } from '../../context/StateContext';

const Cart: React.FC = () => {
  const { totalPrice, totalQuantities, cartItems } = useStateContext();
  const salesTax = parseFloat(((6.25 / 100) * totalPrice).toFixed(2));

  return (
    <section>
      <h1 className="pb-2">Shopping Cart</h1>
      <div className="bg-gray h-0.5" />
      {cartItems.length < 1 ? (
        <InViewAnimationWrapper>
          <section className="flex flex-col justify-center items-center gap-4">
            <RemoveShoppingCart size={150} />
            <h4>Your cart is empty</h4>
            <Link href={'/shop'}>
              <OutlineButton text="Continue Shopping" fillContainer />
            </Link>
          </section>
        </InViewAnimationWrapper>
      ) : (
        <div className="flex flex-col items-center">
          {cartItems.map((item, index) => (
            <InViewAnimationWrapper key={item._id} className="w-full">
              <CartItem data={item} index={index} quantity={item.quantity} />
            </InViewAnimationWrapper>
          ))}
          <InViewAnimationWrapper>
            <div className="flex flex-row justify-center">
              <div className="flex flex-col w-[500px] gap-3">
                <div className="flex flex-row justify-between">
                  <h4>Order Summary</h4>
                  <h4>{totalQuantities} Item(s)</h4>
                </div>
                <div className="bg-gray h-0.5" />
                <div className="flex flex-row justify-between">
                  <p>Item(s) subtotal</p>
                  <p>${addCommasToNumber(totalPrice)}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Sales tax</p>
                  <p>${addCommasToNumber(salesTax)}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>
                <div className="bg-gray h-0.5" />
                <div className="flex flex-row justify-between">
                  <h4>Order Total</h4>
                  <h4>${addCommasToNumber(totalPrice + salesTax)}</h4>
                </div>
                <div className="bg-gray h-0.5" />
                <div className="flex flex-col md:flex-row justify-around self-center gap-2 md:gap-4 px-4 w-[300px] md:w-full">
                  <Link href={'/shop'} className="w-full">
                    <OutlineButton text="Continue Shopping" fillContainer />
                  </Link>
                  <Link href={'/cart/payment'} className="w-full">
                    <OutlineButton
                      text="Pay Now"
                      Icon={CreditCard}
                      fillContainer
                    />
                  </Link>
                </div>
              </div>
            </div>
          </InViewAnimationWrapper>
        </div>
      )}
    </section>
  );
};

export default Cart;
