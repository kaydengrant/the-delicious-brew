import React, { useState } from 'react';

import { AngleDown, AngleUp } from '../../utils';

type Props = {
  data: { text: string; param: string }[];
  onClickFunction?: () => void;
  setState: React.Dispatch<React.SetStateAction<any>>;
};

const DropDownButton: React.FC<Props> = ({
  data,
  onClickFunction,
  setState,
}) => {
  const [isActive, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col items-center w-56">
      <button
        onClick={() => setActive(!isActive)}
        className={`flex flex-row w-full justify-between items-center bg-white border-2 border-black px-4 py-1 ${
          isActive ? 'rounded-t' : 'rounded'
        } gap-4`}
      >
        {data[currentIndex].text}
        {isActive ? (
          <AngleDown size={20} className="clickable" />
        ) : (
          <AngleUp size={20} className="clickable" />
        )}
      </button>
      <div className="relative flex justify-center">
        <div
          className={`${
            isActive ? 'absolute z-[50]' : 'hidden'
          } w-56 bg-white border-2 border-black border-t-0 rounded-b`}
        >
          {isActive &&
            data.map((item, index) => {
              return index != currentIndex ? (
                <p
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setActive(false);
                    setState(data[index]);
                    onClickFunction ? onClickFunction() : undefined;
                  }}
                  className="clickable px-4"
                >
                  {data[index].text}
                </p>
              ) : undefined;
            })}
        </div>
      </div>
    </div>
  );
};

export default DropDownButton;
