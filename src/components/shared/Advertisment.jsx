import React from "react";
import { useInView } from "react-intersection-observer";

const Advertisment = ({ imgsrc, imgsrcTablet, imgsrcDesktop }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={` ${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0" 
      } app-container  mt-[120px] md:mt-[96px] flex flex-col lg:flex-row-reverse items-center gap-x-[50px] justify-center lg:justify-between lg:items-center mb-[120px] lg:mb-[200px] transition-all duration-500`}
    >
      <picture className="rounded-md md:flex-3">
        <source
          media="(min-width:1024px)"
          srcSet={imgsrcDesktop}
          //   className="h-[540px]"
        />
        <source media="(min-width:768px)" srcSet={imgsrcTablet} />
        <img
          srcSet={imgsrc}
          alt="best gear"
          className="rounded-md h-[300px] lg:h-[588px] object-cover"
        />
      </picture>
      <div className="lg:max-w-[350px] xl:max-w-[445px] text-center lg:text-left md:flex-2">
        <h4 className="uppercase pt-10 md:pt-[63px] ">
          Bringing you the
          <br />
          <span
            className="text-a
           text-primary"
          >
            best
          </span>{" "}
          audio gear
        </h4>
        <p className="pt-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};

export default Advertisment;
