import React from 'react';
import { IconType } from '@react-icons/all-files';

type Props = {
  text: string;
  Icon?: IconType;
  onClickFunction?: () => void;
  fillContainer?: boolean;
};

const OutlineButton: React.FC<Props> = ({
  text,
  Icon,
  onClickFunction,
  fillContainer,
}) => {
  return (
    <button
      onClick={() => (onClickFunction ? onClickFunction() : undefined)}
      className={`clickable flex flex-row items-center bg-white border-2 border-black px-4 py-1 rounded gap-4 ${
        fillContainer ? 'w-full justify-around' : 'justify-between'
      }`}
    >
      {text}
      {Icon && <Icon />}
    </button>
  );
};

export default OutlineButton;
