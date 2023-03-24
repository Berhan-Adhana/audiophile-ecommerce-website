import React from "react";
import { Link } from "react-router-dom";

const LikeProductCard = ({ images, name, slug }) => {
  let imgsrc;
  let imgsrcTablet;
  let imgsrcDesktop;

  images?.data?.map((image) => {
    if (image?.attributes?.alternativeText === "mobile")
      imgsrc = image?.attributes?.url;
    if (image?.attributes?.alternativeText === "desktop")
      imgsrcDesktop = image?.attributes?.url;
    if (image?.attributes?.alternativeText === "tablet")
      imgsrcTablet = image?.attributes?.url;
  });
  return (
    <div className="h-[265px] w-full md:h-[471px] lg:w-[350px] md:w-[223px] flex flex-col  gap-y-8 items-center justify-center mt-10">
      <div className="bg-lightGrey h-[120px] md:h-[318px] w-full flex items-center justify-center rounded-[8px]">
        <picture className="rounded-[8px] object-cover">
          <source
            media="(min-width:1024px )"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcDesktop}`}
          />
          <source
            media="(min-width:768px)"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcTablet}`}
          />
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${imgsrc}`}
            alt="zx7 speaker"
            className=" object-cover rounded-[8px] h-[86px] w-[72px] md:h-[193px] md:w-[148.31px]"
          />
        </picture>
      </div>
      <p className="font-bold text-[24px] leading-[32.78px] tracking-[1.71px] uppercase text-center text-black whitespace-nowrap ">
        {`${name.substring(1, 10)}...`}
      </p>
      <Link to={`/productdetails/${slug}`}>
        <button className="btn btn-primary">see product</button>
      </Link>
    </div>
  );
};

export default LikeProductCard;
