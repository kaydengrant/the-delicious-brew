import React from 'react';

const Footer: React.FC = () => {
  return (
    <section className="flex flex-col justify-center w-full">
      <div className=" bg-gray h-0.5" />
      <p className="flex justify-end px-2 pt-4">
        © 2023 Kayden Grant. All Rights Reserved.
      </p>
    </section>
  );
};

export default Footer;
