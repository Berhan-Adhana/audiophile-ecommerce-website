import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Badge = ({ number, handleClick }) => {
  return (
    <div className="relative cursor-pointer" onClick={handleClick}>
      <AiOutlineShoppingCart
        size={24}
        className="hover:text-accent cursor-pointer transition-colors duration-500"
      />
      <span className="rounded-full bg-primary absolute h-5 w-5 -top-3 -right-2 flex items-center justify-center">
        {number}
      </span>
    </div>
  );
};

export default Badge;
