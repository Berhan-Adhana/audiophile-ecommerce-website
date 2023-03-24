import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem,
  setCartState,
} from "../../features/CartSlice";

const CartItem = ({ item: { id, image, name, price, cartQuantity, slug } }) => {
  const shortName = name.split(" ");
  const dispatch = useDispatch();
  const handleItemIncrease = () => {
    dispatch(increaseItemQty({ id }));
  };
  const handleItemDecrease = () => {
    dispatch(decreaseItemQty({ id }));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem({ id }));
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-x-4">
        <Link
          onClick={() => {
            dispatch(setCartState(false));
          }}
          to={`/productdetails/${slug}`}
          className="h-[64px] w-[64px] bg-lightGrey flex items-center justify-center cursor-default"
        >
          <img
            src={image}
            alt={name}
            className="object-contain w-full h-full"
          />
        </Link>
        <div className="flex items-center justify-center flex-col">
          <p className="font-bold text-black uppercase">
            {" "}
            {shortName[0] + " " + (shortName[1] ? shortName[1] : "")}
          </p>
          <small className="text-[14px] font-bold text-black/50">{`$ ${price}`}</small>
        </div>
      </div>
      <div className="bg-lightGrey flex items-center justify-center">
        <button
          className="w-8 h-8 text-black/50 hover:text-primary"
          onClick={handleItemDecrease}
        >
          -
        </button>
        <p className="text-black">{cartQuantity}</p>
        <button
          className="w-8 h-8 text-black/50 hover:text-primary"
          onClick={handleItemIncrease}
        >
          +
        </button>
      </div>
      <BsFillTrash3Fill
        size={24}
        onClick={handleRemoveItem}
        className="hover:text-primary text-black/50 cursor-pointer ml-2"
      />
    </div>
  );
};

export default CartItem;
