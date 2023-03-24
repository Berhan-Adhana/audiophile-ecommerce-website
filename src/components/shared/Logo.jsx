import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({logo}) => (
  <NavLink to="/">
    <img src={logo} alt="logo" />
  </NavLink>
);

export default Logo;
