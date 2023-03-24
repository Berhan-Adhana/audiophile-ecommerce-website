import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ProductCard from "../components/shared/ProductCard";
import { GET_AUDIOPHILES_BY_CATEGORY } from "../graphql/schema";
import CategoryTitle from "../components/shared/CategoryTitle";

const Category = () => {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_AUDIOPHILES_BY_CATEGORY, {
    variables: { name: name },
  });

  if (loading) <p>Loading..</p>;
  if (error) <p>{error.message}</p>;

  return (
    <main className="">
      <CategoryTitle title={name} />
      {data?.audiophiles?.data?.map((product, index) => {
        return (
          <ProductCard
            key={index}
            images={product?.attributes?.image?.data}
            slug={product?.attributes?.slug}
            name={product?.attributes?.name}
            desc={product?.attributes?.description}
            isNew={product?.attributes?.new}
          />
        );
      })}
      {/* <ProductCard
        image={image1}
        imageTablet={imageTablet1}
        imageDesktop={imageDesktop1}
        name={`XX99 Mark II <br /> Headphones`}
        desc=" As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, 
        mixing engineers, and music aficionados alike in studios and on the go."
        isReversed
      />
      <ProductCard
        image={image2}
        imageTablet={imageTablet2}
        imageDesktop={imageDesktop2}
        name={`XX99 Mark II <br /> Headphones`}
        desc="Enjoy your audio almost anywhere and customize it to your 
        specific tastes with the XX59 headphones. The stylish yet durable versatile
         wireless headset is a brilliant companion at home or on the move."
        isReversed
      /> */}
    </main>
  );
};

export default Category;
