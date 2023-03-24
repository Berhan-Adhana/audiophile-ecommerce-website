import React from "react";

const Summary = ({ item: { image, name, price, cartQuantity } }) => {
  const shortName = name.split(" ");
  return (
    <div className="flex justify-between items-start mt-8 rounded-[8px]">
      <div className="flex gap-x-[30px] justify-center items-center">
        <div className="h-[64px] w-[64px] bg-lightGrey flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-[15px] font-bold leading-[25px] text-black whitespace-nowrap">
            {shortName[0] + " " + (shortName[1] ? shortName[1] : "")}
          </p>
          <small className="text-[14px] leading-[25px] font-bold">
            {`$ ${price}`}
          </small>
        </div>
      </div>
      <p className="font-bold text-[15px] leading-[25px] ">{`x ${cartQuantity}`}</p>
    </div>
  );
};

export default Summary;
