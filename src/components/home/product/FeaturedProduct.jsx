import React from "react";
import FeaturedProductCard1 from "./Featured/FeaturedProductCard1";
import FeaturedProductCard2 from "./Featured/FeaturedProductCard2";
import FeaturedProductCard3 from "./Featured/FeaturedProductCard3";

const FeaturedProduct = ({ featured }) => {
  return (
    <div className="app-container mt-[121px]">
      {featured?.map((product, index) => {
        if (index === 0)
          return (
            <FeaturedProductCard3
              key={index}
              name={product?.attributes?.name}
              desc={product?.attributes?.description}
              images={product?.attributes?.image?.data}
              slug={product?.attributes?.slug}
            />
          );

        if (index === 1)
          return (
            <FeaturedProductCard2
              key={index}
              name={product?.attributes?.name}
              images={product?.attributes?.image?.data}
              slug={product?.attributes?.slug}
            />
          );

        if (index === 2)
          return (
            <FeaturedProductCard1 key={index}
              name={product?.attributes?.name}
              images={product?.attributes?.image?.data}
              slug={product?.attributes?.slug}
            />
          );
      })}
    </div>
  );
};

export default FeaturedProduct;
