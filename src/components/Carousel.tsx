import React, { ReactElement, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

type Props = {
  children: ReactElement;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  length: number;
};

const Carousel: React.FC<Props> = ({ children, index, setIndex, length }) => {
  return (
    <>
      {index > 0 && (
        <FaAngleLeft
          className="text-gray clickable mx-2"
          size={50}
          onClick={() => {
            setIndex(index - 1);
          }}
        />
      )}
      <div className="flex flex-row overflow-x-hidden">{children}</div>
      {index < length && (
        <FaAngleRight
          className="text-gray clickable mx-2"
          size={50}
          onClick={() => {
            setIndex(index + 1);
          }}
        />
      )}
    </>
  );
};

export default Carousel;
