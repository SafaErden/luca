/* eslint-disable import/no-unresolved */
import React from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => (
  <ToastContainer
    position='top-center'
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    closeButton={false}
    transition={Flip}
  />
);

const toaster = (value, delay = 3000) => {
  toast.dark(value, {
    position: 'top-center',
    autoClose: delay,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export { toaster };
export default Toast;
