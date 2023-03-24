import React, { useEffect, useState } from "react";
import ProductDetail from "../components/shared/ProductDetail";

import image2 from "../assets/shared/mobile/image-xx59-headphones.jpg";
import imageTablet2 from "../assets/shared/tablet/image-xx59-headphones.jpg";
import imageDesktop2 from "../assets/shared/desktop/image-xx59-headphones.jpg";
import ProductFeature from "../components/shared/ProductFeature";
import Gallery from "../components/shared/Gallery";

import firstMobile from "../assets/product-xx59-headphones/mobile/image-gallery-1.jpg";
import firstTablet from "../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import firstDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";

import secondMobile from "../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";
import secondTablet from "../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import secondDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";

import thirdMobile from "../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";
import thirdTablet from "../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import thirdDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import LikeProductCard from "../components/shared/LikeProductCard";
import { useParams } from "react-router-dom";

import { useQuery, gql } from "@apollo/client";
import { GET_AUDIOPHILE } from "../graphql/schema";
import { useDispatch } from "react-redux";

const gallery = {
  first: {
    mobile: firstMobile,
    tablet: firstTablet,
    desktop: firstDesktop,
  },
  second: {
    mobile: secondMobile,
    tablet: secondTablet,
    desktop: secondDesktop,
  },
  third: {
    mobile: thirdMobile,
    tablet: thirdTablet,
    desktop: thirdDesktop,
  },
};

const ProductSingle = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_AUDIOPHILE, {
    variables: { slug: slug },
  });

  if (loading) <p>Loading..</p>;
  if (error) <p>{error.message}</p>;

  return (
    <main className="app-container">
      {/* proudct detail */}
      <ProductDetail
        id={data?.audiophiles?.data[0]?.id}
        slug={data?.audiophiles?.data[0]?.attributes?.slug}
        images={data?.audiophiles?.data[0]?.attributes?.image.data}
        name={data?.audiophiles?.data[0]?.attributes?.name}
        desc={data?.audiophiles?.data[0]?.attributes?.description}
        price={data?.audiophiles?.data[0]?.attributes?.price}
        isNew={data?.audiophiles?.data[0]?.attributes?.new}
      />
      {/* Product Feature */}
      <ProductFeature
        features={data?.audiophiles?.data[0]?.attributes?.features}
        inBox={data?.audiophiles?.data[0]?.attributes?.includes}
      />
      {/* Product Gallary */}
      <Gallery
        first={gallery.first}
        second={gallery.second}
        third={gallery.third}
      />
      <h5 className="mt-[120px] text-center">you may also like</h5>
      <div className="flex flex-col gap-y-[56px] md:flex-row gap-x-[11px] items-start justify-center">
        {data?.audiophiles?.data[0]?.attributes?.others?.data.map(
          (other, index) => {
            return (
              <LikeProductCard
                key={index}
                images={other?.attributes?.image}
                name={other?.attributes?.name}
                slug={other?.attributes?.slug}
              />
            );
          }
        )}
      </div>
    </main>
  );
};

export default ProductSingle;

//    <div>
//     <LikeProductCard />
//     <LikeProductCard />
//     <LikeProductCard />
//   </div>
