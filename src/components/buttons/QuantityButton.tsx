import React, { useEffect } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';

type Props = {
  quantityState: number;
  setQuantityState: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityButton: React.FC<Props> = ({
  quantityState,
  setQuantityState,
}) => {
  return (
    <button className="flex flex-row w-32 justify-between items-center bg-white border-2 border-black px-4 py-1 rounded gap-4">
      <FaMinus
        size={20}
        onClick={() => quantityState > 1 && setQuantityState(quantityState - 1)}
        className={`clickable ${
          quantityState <= 1 ? 'text-gray' : 'text-black'
        }`}
      />
      {quantityState}
      <FaPlus
        size={20}
        onClick={() =>
          quantityState < 20 && setQuantityState(quantityState + 1)
        }
        className={`clickable ${
          quantityState >= 20 ? 'text-gray' : 'text-black'
        }`}
      />
    </button>
  );
};

export default QuantityButton;
