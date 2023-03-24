import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/shared/desktop/logo.svg";
import { menuLinks } from "../../utlities/constants";
import Logo from "./Logo";
import CategoryCard from "./CategoryCard";
import Categories from "../home/Categories";
import {
  selectCartState,
  selectCartTotalQantity,
  setCartState,
} from "../../features/CartSlice";

import Badge from "../Badge";
import Cart from "../cart/Cart.jsx";
import Modal from "../Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartState = useSelector(selectCartState);

  const cartTotalQuantity = useSelector(selectCartTotalQantity);

  const dispatch = useDispatch();

  // Closes and open a menu on mobile devices
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  // Toogle cart state
  const handleCartClick = () => {
    dispatch(setCartState(!cartState));
  };

  return (
    <header className="bg-background fixed top-0 left-0 right-0 z-[200] text-white h-[90px] border-solid border-[2px] border-white/10">
      {/* Desktop */}
      <nav className="app-container hidden lg:flex justify-between items-center pt-[32px]">
        <Logo logo={logo} />
        <ul className="flex gap-4 ">
          {menuLinks.map((menu, index) => {
            return (
              <NavLink
                key={index}
                to={menu.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary hover:text-accent transition-colors duration-500 menu-items"
                    : "hover:text-accent transition-colors duration-500 menu-items"
                }
              >
                <li>{menu.name}</li>
              </NavLink>
            );
          })}
        </ul>
        <Badge number={cartTotalQuantity} handleClick={handleCartClick} />

        {cartState && <Cart />}
      </nav>
      {/* Mobile */}
      <nav className="app-container flex lg:hidden justify-between items-center pt-[32px] relative h-full ">
        <AiOutlineMenu
          size={24}
          onClick={handleMenuClick}
          className="cursor-pointer"
        />
        <Logo logo={logo} />
        {isOpen && (
          <Modal>
            <Categories style="pb-[120px]" />
          </Modal>
        )}
        <Badge number={cartTotalQuantity} handleClick={handleCartClick} />

        {cartState && <Cart />}
      </nav>
    </header>
  );
};

export default Header;
