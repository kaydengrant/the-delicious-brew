import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

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
          <ul className="grid grid-cols-2 grid-flow-row gap-x-12 justify-start justify-items-start items-center">
            {data.map((item, index) => (
              <li key={index} className="flex flex-row w-full justify-between">
                <p className="font-semibold">{item.title}</p>
                <p>
                  {item.value == 'check' ? (
                    <BsCheckLg size={25} className="text-successGreen" />
                  ) : (
                    item.value
                  )}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
};

export default ProductSpecifications;
