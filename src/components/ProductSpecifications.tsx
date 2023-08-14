import React from 'react';

import { Check } from '../utils/icons';

type Props = {
  data: any;
};

const ProductSpecifications: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="bg-gray h-0.5" />
      <section className="flex flex-col gap-6">
        <h3>Specifications</h3>
        <nav>
          <ul className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-x-12 justify-items-start ">
            {data.map((item, index) => (
              <li
                key={index}
                className="flex flex-row w-full justify-between mx-0"
              >
                <p className="font-semibold">{item.title}</p>
                {item.value == 'check' ? (
                  <Check size={25} className="text-successGreen" />
                ) : (
                  <p className="text-right">{item.value}</p>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default ProductSpecifications;
