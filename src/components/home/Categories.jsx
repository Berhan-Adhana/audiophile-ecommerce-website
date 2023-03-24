import React from "react";
import CategoryCard from "../shared/CategoryCard";
import { useQuery, gql } from "@apollo/client";
import { GET_CATEGORIES } from "../../graphql/schema";
import { useInView } from "react-intersection-observer";

const Categories = ({ style }) => {
  const { loading, error, data: categories } = useQuery(GET_CATEGORIES);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  if (loading) <p>Loading..</p>;
  if (error) <p>{error.message}</p>;

  return (
    <div
      className={`${style} 
      flex gap-y-[55px] bg-white   flex-col md:flex-row md:gap-x-[10px] items-center justify-center`}
    >
      {categories?.categories?.data?.map((category, index) => {
        return <CategoryCard key={index} category={category} />;
      })}
     
    </div>
  );
};

export default Categories;
