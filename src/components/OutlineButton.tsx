import React from 'react';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  Icon?: IconType;
};

const OutlineButton: React.FC<Props> = ({ text, Icon }) => {
  return (
    <button className="clickable flex flex-row justify-between items-center bg-white border-2 border-black px-4 py-1 rounded gap-4">
      {text}
      {Icon && <Icon />}
    </button>
  );
};

export default OutlineButton;
