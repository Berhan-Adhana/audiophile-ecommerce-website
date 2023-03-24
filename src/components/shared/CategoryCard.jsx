import React from "react";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import headphone from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
const CategoryCard = ({ category }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <article
      ref={ref}
      className={`${
        inView ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
      } h-[217px] w-[327px] flex  items-center justify-center `}
    >
      <div className="relative w-full h-[165px] px-2 rounded-md mt-[52px] bg-lightGrey text-center md:h-[217px] md:w-[223px]">
        <img
          src={`http://localhost:1337${category?.attributes?.categoryImage?.data[0]?.attributes?.url}`}
          alt={category?.attributes?.name}
          className="absolute top-0 -translate-y-[40%] left-[50%] -translate-x-[50%] w-[98px] h-[104px] z-[100]"
        />
        <p className="uppercase text-black pt-10 font-bold leading-[20.49px] tracking-[1.07px] text-center">
          {category?.attributes?.name}
        </p>
        <NavLink
          className="inline-block btn btn-plain font-bold text-center pt-[17px]"
          to={`/category/${category?.attributes?.name}`}
        >
          Shop
        </NavLink>
      </div>
    </article>
  );
};

export default CategoryCard;
