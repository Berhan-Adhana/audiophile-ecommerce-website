import React from "react";
import { useInView } from "react-intersection-observer";

import headerDesktop from "../../assets/home/desktop/image-hero.jpg";
import headerTablet from "../../assets/home/tablet/image-header.jpg";
import headerMobile from "../../assets/home/mobile/image-header.jpg";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    
  });
  return (
    <div
      ref={ref}
      className={`${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      } bg-heroMobile md:bg-heroTablet lg:bg-heroDesktop bg-cover bg-center bg-no-repeat   h-screen w-full`}
    >
      <div className="app-container flex flex-col items-center justify-center text-white pt-[108px] lg:items-start">
        <p className="uppercase opacity-50 mix-blend-normal font-[400] text-[14px] leading-[19px] tracking-[10px] ">
          NEW PRODUCT
        </p>
        <h1 className="whitespace-nowrap font-bold text-[36px] leading-10 uppercase pt-4 pb-6 text-white">
          XX99 Mark II
          <br /> HeadphoneS
        </h1>
        <p className="opacity-75 mix-blend-normal font-[500] leading-[25px] text-center lg:text-left pb-7">
          Experience natural, lifelike audio and exceptional
          <br className="hidden lg:block" />
          build quality made for the passionate music
          <br className="hidden lg:block" />
          enthusiast.
        </p>
        <button className="btn btn-primary">see product</button>
      </div>
    </div>
  );
};

export default Hero;
