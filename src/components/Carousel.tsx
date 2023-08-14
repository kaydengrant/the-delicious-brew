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
  return (
    <div className="flex relative flex-row items-center gap-2">
      <>
        {index > 0 && (
          <AngleLeft
            className="text-gray z-50 clickable"
            size={50}
            onClick={() => {
              setIndex(index - 1);
              {
                additionalSetterDown && additionalSetterDown();
              }
            }}
          />
        )}
        <div className="flex flex-row overflow-x-hidden">{children}</div>
        {index < length && (
          <AngleRight
            className="text-gray z-50 clickable"
            size={50}
            onClick={() => {
              setIndex(index + 1);
              {
                additionalSetterUp && additionalSetterUp();
              }
            }}
          />
        )}
      </>
    </div>
  );
};

export default Carousel;
