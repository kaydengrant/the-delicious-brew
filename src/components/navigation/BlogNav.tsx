import React from 'react';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

type Props = {
  status: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlogNav: React.FC<Props> = ({ status }) => {
  return (
    <>
      <div className="absolute inset-0 opacity-60 z-10 bg-black " />
      <div
        onMouseLeave={() => status(false)}
        className="flex flex-row justify-center w-screen z-50 bg-white"
      >
        <nav className="flex flex-col z-50  w-full lg:w-[1000px] py-6">
          <ul className="flex flex-row justify-between">
            <li>
              <Link to="/shop">
                <h4 className="clickable italic font-normal underline underline-offset-4">
                  View All
                </h4>
              </Link>
            </li>
            <li
              onClick={() => status(false)}
              className="clickable flex flex-col items-center"
            >
              <GrClose size={25} />
              <p>Close</p>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default BlogNav;
