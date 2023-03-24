import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed z-[1000] left-0 top-[90px] w-full h-full overflow-auto bg-black bg-black/40">
      {children}
    </div>
  );
};

export default Modal;
