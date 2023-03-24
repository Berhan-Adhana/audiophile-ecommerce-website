import React from "react";

const ProductFeature = ({ features, inBox }) => {
  return (
    <div className="flex flex-col gap-y-[88px] mt-[88px] lg:flex-row lg:gap-x-[125px] lg:items-start">
      {/* left */}
      <div className="flex flex-col gap-y-6 lg:max-w-[635px] ">
        <h5>Features</h5>
        <p className="font-[500]">{features}</p>
      </div>
      {/* right */}
      <div className="flex flex-col gap-y-6 md:flex-row md:items-start md:gap-x-[11px] lg:flex-col">
        <h5 className="md:w-[339px]">in the box</h5>
        <ul>
          {inBox?.map((content, index) => {
            return (
              <li key={index} className="flex items-center gap-x-6">
                <span className="text-primary font-bold capitalize">
                  {content.quantity}x
                </span>{" "}
                <p className="capitalize">{content.item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductFeature;
