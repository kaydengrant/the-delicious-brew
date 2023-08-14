import React, { useState } from 'react';
import Image from 'next/image';
import { Slug } from 'sanity';

import { urlForImage } from '../../sanity/lib/client';
import { QuantityButton } from '../components';
import { addCommasToNumber } from '../utils';
import { useStateContext } from '../context/StateContext';

type Props = {
  data: {
    _id: string;
    image: any;
    name: string;
    subTitle: string;
    specifications: string;
    price: number;
    slug: Slug;
  };
  index: number;
  quantity: number;
};

const CartItem: React.FC<Props> = ({ data, index, quantity }) => {
  const { qty, toggleCartItemQuantity, onRemove } = useStateContext();

  const img = urlForImage(data.image[0]).width(1000).url();

  return (
    <section className="flex flex-row justify-between bg-white p-4 rounded-2xl drop-shadow-xl border-2 border-gray">
      <div
        className={`flex relative rounded-xl w-[250px] h-[250px] p-2 ${
          index % 3 == 0 ? 'bg-green' : index % 3 == 1 ? 'bg-brown' : 'bg-blue'
        } drop-shadow-sm`}
      >
        <Image
          loader={() => img}
          src={img}
          alt="Product banner image"
          className="drop-shadow-xl object-contain"
          fill
          unoptimized
          priority
        />
      </div>
      <div className="flex flex-col justify-between w-[65%]">
        <div className="flex flex-col gap-2">
          <h3>{data.name}</h3>
          <h4>{`$${addCommasToNumber(data.price)}`}</h4>
        </div>
        <div className="flex flex-col gap-2">
          <QuantityButton
            quantityState={quantity}
            decQuantityState={() => toggleCartItemQuantity(data._id, 'dec')}
            incQuantityState={() => toggleCartItemQuantity(data._id, 'inc')}
          />
          <div className="flex flex-row items-center justify-between w-full pr-4">
            <p>Subtotal: ${addCommasToNumber(data.price * qty)}</p>
            <p
              className="clickable text-errorRed"
              onClick={() => onRemove(data)}
            >
              Remove
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
