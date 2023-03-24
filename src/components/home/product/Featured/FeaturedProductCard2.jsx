import React from "react";
import z7Tablet from "../../../../assets/home/tablet/image-speaker-zx7.jpg";
import z7Mobile from "../../../../assets/home/mobile/image-speaker-zx7.jpg";
import z7Desktop from "../../../../assets/home/desktop/image-speaker-zx7.jpg";
import { Link } from "react-router-dom";
import responsiveImage from "../../../../utlities/responsiveImage";
const FeaturedProductCard2 = ({ images, name, slug }) => {
  const { imgsrc, imgsrcTablet, imgsrcDesktop } = responsiveImage(images);

  return (
    <div className=" rounded-[8px]     text-black flex  gap-y-6 py-[55px] items-center justify-center mt-6 relative overflow-hidden">
      <div className="absolute top-[50%] -translate-y-[50%] left-6 md:left-[62px] xl:left-[95px] z-10 flex flex-col gap-y-8 max-w-[204px] whitespace-nowrap">
        <h1 className="  ">{name}</h1>
        <Link to={`/productdetails/${slug}`}>
          <button className="btn btn-outline bg-transparent">
            see product
          </button>
        </Link>
      </div>
      <picture className=" ">
        <source
          media="(min-width:1024px )"
          srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcDesktop}`}
        />
        <source
          media="(min-width:768px )"
          srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcDesktop}`}
        />
        <img
          src={`${import.meta.env.VITE_UPLOAD_URL}${imgsrc}`}
          alt="zx7 speaker"
          className="rounded-[8px] relative -right-[50%] "
        />
      </picture>
    </div>
  );
};

export default FeaturedProductCard2;
