// components/ToastWrapper.js
"use client";

import { ToastContainer } from "react-toastify";

export default function ToastWrapper({ children }) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
