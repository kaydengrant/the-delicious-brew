import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

type Props = {
  quantityState: number;
  incQuantityState: () => void;
  decQuantityState: () => void;
};

const QuantityButton: React.FC<Props> = ({
  quantityState,
  incQuantityState,
  decQuantityState,
}) => {
  return (
    <button className="flex flex-row w-32 justify-between items-center bg-white border-2 border-black px-4 py-1 rounded gap-4">
      <FaMinus
        size={20}
        onClick={() => decQuantityState()}
        className={`clickable ${
          quantityState <= 1 ? 'text-gray' : 'text-black'
        }`}
      />
      {quantityState}
      <FaPlus
        size={20}
        onClick={() => incQuantityState()}
        className="clickable text-black"
      />
    </button>
  );
};

export default QuantityButton;
