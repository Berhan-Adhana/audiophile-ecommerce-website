import React from "react";
import Advertisment from "./shared/Advertisment";
import bestGear from "../assets/shared/mobile/image-best-gear.jpg";
import bestGearTablet from "../assets/shared/tablet/image-best-gear.jpg";
import bestGearDesktop from "../assets/shared/desktop/image-best-gear.jpg";
import Categories from "./home/Categories";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const Dashboard = () => {
  const location = useLocation;
  const path = location().pathname;
  return (
    <>
      <Header />


      {path === "/" || path === "/checkout" ? (
        <div>
          {/* <Categories categories={categories} /> */}
          <Outlet />
        </div>
      ) : (
        <div>
          <Outlet />
          <Categories style="mt-12" />
        </div>
      )}

      <Advertisment
        imgsrc={bestGear}
        imgsrcTablet={bestGearTablet}
        imgsrcDesktop={bestGearDesktop}
      />
      <Footer />
    </>
  );
};

export default Dashboard;
