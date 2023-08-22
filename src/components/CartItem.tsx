import React from 'react';
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
  const { toggleCartItemQuantity, onRemove } = useStateContext();

  const img = urlForImage(data.image[0]).width(1000).url();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded-2xl drop-shadow-xl border-2 border-gray gap-2 w-[350px] md:w-full md:h-[250px] lg:h-[300px]">
      <div
        className={`flex relative rounded-xl w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] p-2 ${
          index % 3 == 0 ? 'bg-green' : index % 3 == 1 ? 'bg-brown' : 'bg-blue'
        } drop-shadow-sm`}
      >
        <Image
          loader={() => img}
          src={img}
          alt="Product banner image"
          className="drop-shadow-xl object-contain"
          loading="lazy"
          fill
          unoptimized
        />
      </div>
      <div className="flex flex-col md:justify-between items-center md:items-start w-[80%] md:w-[65%] h-full gap-2 md:gap-0">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h4>{data.name}</h4>
          <h4>{`$${addCommasToNumber(data.price)}`}</h4>
        </div>
        <div className="flex flex-col items-center md:items-start gap-2 w-full">
          <QuantityButton
            quantityState={quantity}
            setQuantityState={() => {}}
            decQuantityState={() => toggleCartItemQuantity(data._id, 'dec')}
            incQuantityState={() => toggleCartItemQuantity(data._id, 'inc')}
          />
          <div className="flex flex-col md:flex-row text-center justify-between w-full md:pr-4">
            <p>Subtotal: ${addCommasToNumber(data.price * quantity)}</p>
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
