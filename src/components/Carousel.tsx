import React, { ReactElement } from 'react';

import { AngleLeft, AngleRight } from '../utils/icons';

type Props = {
  children: ReactElement;
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  length: number;
  additionalSetterUp?: () => void;
  additionalSetterDown?: () => void;
};

const Carousel: React.FC<Props> = ({
  children,
  index,
  setIndex,
  length,
  additionalSetterUp,
  additionalSetterDown,
}) => {
  const handleIndexDown = () => {
    if (index - 1 < 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleIndexUp = () => {
    if (index + 1 > length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="flex relative flex-row items-center gap-2">
      <>
        <AngleLeft
          className="text-gray clickable"
          size={50}
          onClick={() => {
            handleIndexDown();
            additionalSetterDown && additionalSetterDown();
          }}
        />
        <div className="flex flex-row overflow-x-hidden">{children}</div>
        <AngleRight
          className="text-gray clickable"
          size={50}
          onClick={() => {
            handleIndexUp();
            additionalSetterUp && additionalSetterUp();
          }}
        />
      </>
    </div>
  );
};

export default Carousel;
