import React, { useEffect } from 'react';

import { Plus, Minus } from '../../utils';

type Props = {
  quantityState: number;
  setQuantityState: React.Dispatch<React.SetStateAction<number>>;
  incQuantityState: () => void;
  decQuantityState: () => void;
};

const QuantityButton: React.FC<Props> = ({
  quantityState,
  setQuantityState,
  incQuantityState,
  decQuantityState,
}) => {
  useEffect(() => {
    if (quantityState > 1) {
      setQuantityState(1);
    }
  }, []);

  return (
    <button className="flex flex-row w-32 justify-between items-center bg-white border-2 border-black px-4 py-1 rounded gap-4">
      <Minus
        size={20}
        onClick={() => decQuantityState()}
        className={`clickable ${
          quantityState <= 1 ? 'text-gray' : 'text-black'
        }`}
      />
      {quantityState}
      <Plus
        size={20}
        onClick={() => incQuantityState()}
        className="clickable text-black"
      />
    </button>
  );
};

export default QuantityButton;
