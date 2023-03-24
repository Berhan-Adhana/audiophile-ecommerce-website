import React from "react";
import { Link } from "react-router-dom";
import responsiveImage from "../../utlities/responsiveImage";

const ProductCard = ({
  images,
  desc,
  name,
  slug,
  isNew = false,
  isReversed = false,
}) => {
  const { imgsrc, imgsrcTablet, imgsrcDesktop } = responsiveImage(images);
  return (
    <article
      className={`rounded-[8px]   text-black flex  flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      }
    gap-y-8 lg:gap-x-[100px]  lg:justify-start items-center justify-center mt-6 relative overflow-hidden app-container `}
    >
      <div className=" h-[352px] w-full lg:w-[440px] lg:h-[460px] xl:w-[540px] xl:h-[560px] bg-lightGrey flex items-center justify-center">
        <picture className="rounded-[8px] object-cover w-[220px] h-[243px] lg:w-[349px] lg:h-[386px]">
          <source
            media="(min-width:1024px)"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcDesktop}`}
          />
          <source
            media="(min-width:768px)"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcTablet}`}
          />
          <img
            src={`${import.meta.env.VITE_UPLOAD_URL}${imgsrc}`}
            alt="zx7 speaker"
            className=" object-cover w-[220px] h-[243px] lg:w-[349px] lg:h-[386px]"
          />
        </picture>
      </div>
      {/* <div className="bg-white w-[30px] md:h-[200px] lg:h-[320px] hidden lg:block" /> */}
      <div className="  flex  items-center justify-center  lg:max-w-[445px] ">
        <div className=" flex flex-col justify-center items-center lg:items-start">
          {isNew && (
            <span className="text-accent uppercase font-[400] text-[14px] leading-[19.2px] tracking-[10px] text-center lg:text-left">
              NEW PRODUCT
            </span>
          )}
          <h4 className=" text-center lg:max-w-[445px] lg:text-left mt-4">
            {name}
          </h4>
          <p className="text-center lg:text-left mt-8">{desc}</p>
          <Link preventScrollReset={false} to={`/productdetails/${slug}`}>
            <button className="btn btn-primary mt-6 ">see product</button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
