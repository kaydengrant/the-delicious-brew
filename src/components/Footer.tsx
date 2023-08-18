import React from 'react';

const Footer: React.FC = () => {
  return (
    <div>
      <div className=" bg-gray h-0.5" />
      <div className="flex flex-col justify-center w-full py-2">
        <p className="flex flex-row justify-end px-2">
          © 2023 Kayden Grant. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
