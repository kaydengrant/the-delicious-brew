import React from 'react';
import Image from 'next/image';
import { Slug } from 'sanity';

import { urlForImage } from '../../sanity/lib/client';
import { addCommasToNumber } from '../utils';
import { Check, Cart, Close } from '../utils/icons';
import { OutlineButton, QuantityButton } from '../components';
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
  setShowQuickAdd: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
};

const QuickAddToCartModal: React.FC<Props> = ({
  data,
  setShowQuickAdd,
  index,
}) => {
  const { qty, setQty, incQty, decQty, onAdd } = useStateContext();

  const img = urlForImage(data.image[0]).width(1000).url();

  return (
    <>
      <div
        onClick={() => setShowQuickAdd(false)}
        className="absolute inset-0 opacity-90 z-50 bg-black "
      />
      <div className="absolute inset-0 flex justify-center items-center h-[100vh]">
        <div className="fixed flex flex-col sm:flex-row justify-around items-center w-[300px] sm:w-[600px] z-50 bg-white rounded-lg border-2 border-gray gap-4 px-2 py-8">
          <div
            onClick={() => setShowQuickAdd(false)}
            className="absolute right-0 top-0 p-2 clickable"
          >
            <Close size={20} />
          </div>
          <div
            className={`flex relative rounded-xl w-[100px] h-[100px] sm:w-[200px] sm:h-[200px] p-2 drop-shadow-sm ${
              index % 3 == 0
                ? 'bg-blue'
                : index % 3 == 1
                ? 'bg-green'
                : 'bg-brown'
            }`}
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
          <div className="flex flex-col h-full justify-between items-center text-center sm:w-[60%] pr-4 gap-4">
            <div className="flex flex-col gap-2">
              <h4>{data.name}</h4>
              <h4>${data.price}</h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row gap-4 items-center justify-center lg:justify-start text-successGreen">
                <Check size={25} />
                <p>In Stock</p>
              </div>
              <QuantityButton
                quantityState={qty}
                setQuantityState={setQty}
                incQuantityState={incQty}
                decQuantityState={decQty}
              />
              <p>Subtotal: ${addCommasToNumber(data.price * qty)}</p>
              <OutlineButton
                text="Add to Cart"
                Icon={Cart}
                onClickFunction={() => {
                  onAdd(data, qty);
                  setShowQuickAdd(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickAddToCartModal;
