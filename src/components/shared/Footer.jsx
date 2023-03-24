import React from "react";
import { menuLinks } from "../../utlities/constants";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import logo from "../../assets/shared/desktop/logo.svg";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-white">
      <div className="app-container pt-[52px] pb-[38px] relative before:content-[''] before:w-[101px] before:h-1 before:bg-primary before:absolute before:top-0 before:left-0">
        {/* menus */}
        <div className="flex flex-col lg:flex-row md:items-start gap-y-4 justify-between items-center ">
          <Logo logo={logo} />
          <ul className="flex flex-col md:flex-row  items-center gap-y-4 gap-x-4">
            {menuLinks.map((menu, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer hover:text-accent transition-colors duration-500 menu-items"
                >
                  <NavLink
                    to={menu.link}
                    className={({ isActive }) =>
                      isActive ? "text-primary" : ""
                    }
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="opacity-50 mix-blend-normal mt-12 lg:max-w-[540px]">
          Audiophile is an all in one ssstop to fulfill your audio needs. We're
          a small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        {/* Copyright and social links */}
        <div className="flex flex-col md:flex-row md:justify-between   gap-y-12 justify-center items-center mt-12 lg:h-[70px] ">
          <p className="opacity-50 mix-blend-normal">
            Copyright 2021. All Rights Reserved
          </p>
          {/* social links */}
          <div className="flex gap-x-4 lg:self-start ">
            <AiFillFacebook
              size={25}
              className="hover:text-accent cursor-pointer "
            />
            <AiOutlineTwitter
              size={25}
              className="hover:text-accent cursor-pointer "
            />
            <AiOutlineInstagram
              size={25}
              className="hover:text-accent cursor-pointer "
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
