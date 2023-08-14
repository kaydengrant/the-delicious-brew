import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

type Props = {
  children: ReactNode;
};

const ToastProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <ToastContainer position="top-center" hideProgressBar={true} />
    </>
  );
};

export default ToastProvider;
