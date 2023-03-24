import React from "react";

const Gallery = ({ first, second, third }) => {
  return (
    <div className="flex flex-col gap-y-[20px] mt-[88px] md:flex-row md:gap-x-[18px] lg:gap-x-[30px]">
      {/* left */}
      <div className="flex flex-col md:flex-[2] gap-y-[20px] lg:gap-y-8">
        <picture className="rounded-[8px] object-cover">
          <source media="(min-width:1024px )" srcSet={first.desktop} />
          <source media="(min-width:768px)" srcSet={first.tablet} />
          <img
            src={first.mobile}
            alt="zx7 speaker"
            className=" object-cover rounded-[8px] h-[174px]  xl:h-[280px]"
          />
        </picture>

        <picture className="rounded-[8px] object-cover ">
          <source media="(min-width:1024px )" srcSet={second.desktop} />
          <source media="(min-width:768px)" srcSet={second.tablet} />
          <img
            src={second.mobile}
            alt="zx7 speaker"
            className=" object-cover rounded-[8px] h-[174px]  xl:h-[280px]"
          />
        </picture>
      </div>
      {/* Right */}
      <div className="md:flex-[3]">
        <picture className="rounded-[8px] object-cover ">
          <source media="(min-width:1024px )" srcSet={third.desktop} />
          <source media="(min-width:768px)" srcSet={third.tablet} />
          <img
            src={third.mobile}
            alt="zx7 speaker"
            className=" object-cover rounded-[8px]  h-[368px] xl:h-[592px] "
          />
        </picture>
      </div>
    </div>
  );
};

export default Gallery;
