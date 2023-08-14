import React, { ReactNode } from 'react';
import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

type Props = {
  children: ReactNode;
};

const ToastProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        transition={Slide}
      />
    </>
  );
};

export default ToastProvider;
