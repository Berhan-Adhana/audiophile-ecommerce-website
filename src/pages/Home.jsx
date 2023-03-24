import axios from "axios";
import React, { useEffect, useState } from "react";
import Categories from "../components/home/Categories.jsx";
import Hero from "../components/home/Hero";
import FeaturedProduct from "../components/home/product/FeaturedProduct";
import { useQuery, gql } from "@apollo/client";
import { GET_FEATURED } from "../graphql/schema.js";

const Home = () => {
  const { loading, error, data: featuredProduct } = useQuery(GET_FEATURED);
  if (loading) <p>Loading..</p>;
  if (error) <p>{error.message}</p>;

  return (
    <main>
      <Hero />
      <Categories style="mt-12" />

      {/* <FeaturedProduct featured={featuredProduct?.audiophiles?.data} /> */}
    </main>
  );
};

export default Home;
