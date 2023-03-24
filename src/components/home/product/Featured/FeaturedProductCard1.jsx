import React from "react";
import z9 from "../../../../assets/home/mobile/image-speaker-zx9.png";
import z9Tablet from "../../../../assets/home/tablet/image-speaker-zx9.png";
import z9Desktop from "../../../../assets/home/desktop/image-speaker-zx9.png";
import { Link } from "react-router-dom";
import responsiveImage from "../../../../utlities/responsiveImage";
const FeaturedProductCard1 = ({ images, desc, name, slug }) => {
  const { imgsrc, imgsrcTablet, imgsrcDesktop } = responsiveImage(images);
  console.log(imgsrc);
  console.log(imgsrcTablet);
  console.log(imgsrcDesktop);

  return (
    <div className="bg-primary rounded-[8px]  text-white flex flex-col gap-y-8 md:gap-y-[64px]  py-[55px] md:pb-[64px] md:pt-[52px] items-center justify-center lg:flex-row lg:justify-start gap-x-[200px] overflow-hidden">
      <picture>
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
          alt={name}
          className="h-[172px] md:h-[237px] lg:h-[493px] lg:relative lg:-bottom-[4.65rem] lg:left-[5rem] xl:left-[117px] "
        />
      </picture>
      <div className="flex flex-col items-center gap-y-6  lg:">
        <h1 className="font-bold text-center lg:text-left ">
          {/* ZX9
          <br className="hidden lg:block" /> SPEAKER */}
          {name}
        </h1>
        <p className="text-center lg:text-left max-w-[349px]">{desc}</p>
        <Link to={`/productdetails/${slug}`}>
          <button className="btn btn-secondary md:mt-4 ">see product</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProductCard1;
