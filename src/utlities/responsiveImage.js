import React from "react";

const responsiveImage = (images) => {
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
  });

  return { imgsrc, imgsrcTablet, imgsrcDesktop };
};

export default responsiveImage;
