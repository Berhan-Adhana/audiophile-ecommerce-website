import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearCart,
  getTotals,
  selectCartItems,
  selectCartState,
  selectCartTotalAmount,
  selectCartTotalQantity,
  selectGetTotals,
} from "../../features/CartSlice";
import CartItem from "./CartItem";
import Modal from "../Modal";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectGetTotals);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQantity);
  const cartState = useSelector(selectCartState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);

  return (
    <Modal>
      <div className="w-[330px]  bg-white absolute  right-[0]   shadow-checkoutShadow px-7 pt-[31px] pb-[100px]">
        {/* Header */}
        <header className="flex justify-between items-center">
          <h6>{`cart ${cartTotalQuantity}`}</h6>
          <button
            className="cursor-pointer text-black/50 hover:text-primary"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Remove all
          </button>
        </header>

        {cartTotalQuantity === 0 ? (
          <h4>Your cart is Empty</h4>
        ) : (
          <div>
            {/* Cart Item */}
            <div className="flex flex-col gap-y-6 ">
              {cartItems &&
                cartItems?.map((cartItem, index) => {
                  return <CartItem key={index} item={cartItem} />;
                })}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between pt-2">
              <p className="font-[500] uppercase text-black/50">TOTAL</p>
              <p className="font-bold text-[18px] leading-[24.59px] text-black">
                $ {cartTotalAmount}
              </p>
            </div>
            {/* button */}
            <Link
              onClick={() => {
                dispatch(!cartState);
              }}
              to="/checkout"
              className=" text-center block btn btn-primary w-full my-6"
            >
              checkout
            </Link>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
