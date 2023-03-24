import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../features/CartSlice";

const ProductDetail = ({ id, images, desc, name, price, isNew = false,slug }) => {
  const [cartQuantity, setCartQuantitiy] = useState(0);
  const dispatch = useDispatch();

  const handleAddQuanty = () => {
    setCartQuantitiy((preQuantity) => preQuantity + 1);
  };
  const handleDecreaseQuanty = () => {
    setCartQuantitiy((preQuantity) => preQuantity > 0 && preQuantity - 1);
  };
  const isDisabled = cartQuantity === 0 ? true : false;


  let imgsrc;
  let imgsrcTablet;
  let imgsrcDesktop;

  images?.map((image) => {
    if (image?.attributes?.alternativeText === "mobile")
      imgsrc = image?.attributes?.url;
    if (image?.attributes?.alternativeText === "desktop")
      imgsrcDesktop = image?.attributes?.url;
    if (image?.attributes?.alternativeText === "tablet")
      imgsrcTablet = image?.attributes?.url;
    // console.log(image.attributes.alternativeText);
  });

  const item = { id, name, price, cartQuantity,slug };
  return (
    <article className="rounded-[8px]   text-black flex  flex-col md:flex-row gap-y-8 lg:gap-x-[100px] md:gap-x-[69px] lg:justify-start items-center justify-center mt-[96px] relative overflow-hidden app-container">
      <div className=" h-[352px] w-full lg:w-[440px] md:flex-[2] md:h-[480px] lg:h-[460px] xl:w-[540px] xl:h-[560px] bg-lightGrey flex items-center justify-center">
        <picture className="rounded-[8px] object-cover w-[220px] h-[243px] lg:w-[349px]  lg:h-[386px]">
          <source
            media="(min-width:1024px )"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcDesktop}`}
          />
          <source
            media="(min-width:768px)"
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrcTablet}`}
          />
          <img
            srcSet={`${import.meta.env.VITE_UPLOAD_URL}${imgsrc}`}
            alt={name}
            className=" object-cover w-[220px]  h-[243px] lg:w-[349px] lg:h-[386px]"
          />
        </picture>
      </div>
      {/* <div className="bg-white w-[30px] md:h-[200px] lg:h-[320px] hidden lg:block" /> */}
      <div className="  flex  items-center justify-center  lg:max-w-[445px] md:flex-[3]">
        <div className=" flex flex-col justify-center items-center lg:items-start">
          {isNew && (
            <span className="text-accent uppercase font-[400] text-[14px] leading-[19.2px] tracking-[10px] text-center lg:text-left">
              NEW PRODUCT
            </span>
          )}
          <h2 className="  text-center lg:text-left mt-4 lg:max-w-[445px]">
            {name}
          </h2>
          <p className="text-center lg:text-left mt-8">{desc}</p>
          <p className="font-bold text-black text-[18px] leading-[24.59px] tracking-[1.29px] mt-8">{`$ ${price}`}</p>
          <div className="flex items-center justify-center gap-x-4 mt-6 ">
            <div className="flex items-center justify-center  ">
              <button
                className="h-5 w-5 btn flex items-center justify-center font-bold outline-none border-none"
                onClick={() => {
                  handleDecreaseQuanty();
                }}
              >
                -
              </button>
              <p>{cartQuantity}</p>
              <button
                className={`h-5 w-5 btn flex items-center justify-center font-bold outline-none border-none `}
                onClick={() => {
                  handleAddQuanty();
                }}
              >
                +
              </button>
            </div>

            <button
              disabled={isDisabled}
              className={`btn btn-primary disabled:opacity-75 `}
              onClick={() => {
                item.image = `http://localhost:1337${imgsrc}`;
                dispatch(addCartItem(item));
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ProductDetail;
