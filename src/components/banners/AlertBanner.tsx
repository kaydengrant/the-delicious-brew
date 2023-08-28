import React from 'react';
import Marquee from 'react-fast-marquee';

import { IconType } from '@react-icons/all-files';

type Props = {
  text: string[];
  Icon?: IconType;
};

const AlertBanner: React.FC<Props> = ({ text, Icon }) => {
  return (
    <section className="mt-0">
      <div className="absolute left-0 right-0">
        <Marquee
          autoFill
          className="absolute left-0 right-0 flex flex-row h-10 bg-gray drop-shadow-md"
        >
          {text.map((item) => (
            <div
              key={0}
              className="flex flex-row items-center gap-x-10 mx-5 text-white drop-shadow-lg"
            >
              <h4>{item}</h4>
              {Icon && <Icon size={25} />}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AlertBanner;
