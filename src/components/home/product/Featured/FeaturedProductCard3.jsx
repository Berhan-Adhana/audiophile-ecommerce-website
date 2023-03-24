import React from "react";
import yx1 from "../../../../assets/home/mobile/image-earphones-yx1.jpg";
import yx1Tablet from "../../../../assets/home/tablet/image-earphones-yx1.jpg";
import yx1Desktop from "../../../../assets/home/desktop/image-earphones-yx1.jpg";
import { Link } from "react-router-dom";
import responsiveImage from "../../../../utlities/responsiveImage";
const FeaturedProductCard3 = ({ images, name, slug }) => {
  const { imgsrc, imgsrcTablet, imgsrcDesktop } = responsiveImage(images);

  return (
    <div className=" rounded-[8px] bg-lightGrey md:bg-white text-black flex flex-col md:flex-row  gap-y-6 md:gap-x-[11px] lg:gap-x-[30px] lg:justify-start items-center justify-center mt-6 relative overflow-hidden  ">
      <picture className="rounded-[8px]  object-cover  md:flex-1">
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
          className="h-[200px] md:h-[320px] md:w-full"
        />
      </picture>
      {/* <div className="bg-white w-[30px] md:h-[200px] lg:h-[320px] hidden lg:block" /> */}
      <div className=" flex-1 h-[200px] md:h-[320px] bg-lightGrey flex  items-center justify-center py-[41px] md:pl-[41px] md:pr-[51px] ">
        <div className=" max-w-[247px] md:pl-[41px] gap-y-8 flex flex-col justify-center items-center">
          <h1 className=" whitespace-nowrap ">{name}</h1>
          <Link to={`/productdetails/${slug}`}>
            <button className="btn btn-outline bg-transparent ">
              see product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductCard3;
