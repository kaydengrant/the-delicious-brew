'use client';
import React, { useRef } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { TbShoppingCartOff } from 'react-icons/tb';

import { CartItem, OutlineButton } from '../../components';
import { useStateContext } from '../../context/StateContext';
import { addCommasToNumber } from '../../utils';

const Cart: React.FC = () => {
  const { totalPrice, totalQuantities, cartItems } = useStateContext();

  return (
    <section>
      <h1 className="pb-2">Shopping Cart</h1>
      <div className="bg-gray h-0.5" />
      {cartItems.length < 1 ? (
        <section className="flex flex-col justify-center items-center gap-4">
          <TbShoppingCartOff size={150} />
          <h4>Your cart is empty</h4>
          <OutlineButton text="Continue Shopping" fillContainer />
        </section>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <CartItem
              key={item._id}
              data={item}
              index={index}
              quantity={item.quantity}
            />
          ))}
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
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="bg-gray h-0.5" />
              <div className="flex flex-row justify-between">
                <h4>Order Total</h4>
                <h4>${addCommasToNumber(totalPrice)}</h4>
              </div>
              <div className="bg-gray h-0.5" />
              <div className="flex flex-row justify-around gap-4 px-4">
                <OutlineButton text="Continue Shopping" fillContainer />
                <OutlineButton
                  text="Pay With Stripe"
                  Icon={FaCreditCard}
                  fillContainer
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
