import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import earphone from "../../backend/public/uploads/image_category_thumbnail_earphones_7d161017af.png";
import Summary from "../components/Summary";
import {
  getTotals,
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQantity,
  selectGetTotals,
  setCartState,
} from "../features/CartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectGetTotals);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQantity);

  const [isEMoney, setIsEMoney] = useState(false);
  const [isCash, setIsCash] = useState(false);

  useEffect(() => {
    dispatch(getTotals());
  }, [dispatch, cartItems]);

  const Input = ({ type, placeholder, id, label }) => {
    return (
      <div className="flex flex-col gap-y-[9px] flex-1">
        <label htmlFor="name" className="text-black">
          {label}
        </label>
        <input
          className="h-[56px] botder-[#CFCFCF] border-[1px] rounded-[8px] placeholder:pl-2 pl-2 outline-none"
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  };

  const SummaryInfo = ({ label, amount }) => {
    return (
      <div
        className={`${
          label === "GRAND TOTAL" ? "mt-6 " : ""
        } flex items-center justify-between`}
      >
        <p className="uppercase  font-[500] text-[15px] leading-[25px]">
          {label}
        </p>
        <span
          className={`${
            label === "GRAND TOTAL" ? "text-primary " : ""
          } font-bold text-[18px] leading-[24.59px] text-black`}
        >
          {`$ ${amount}`}
        </span>
      </div>
    );
  };
  return (
    <main className=" pb-[129px] bg-lightGrey ">
      <button className="app-container">Go Back</button>
      <div className="flex flex-col lg:flex-row lg:gap-x-6 app-container mt-10">
        <form
          action=""
          className="mb-10 rounded-[8px] flex flex-col gap-y-6 shadow-checkoutShadow bg-white px-6 pt-6 pb-[31px] flex-1"
        >
          <h5>checkout</h5>
          <p className="text-primary uppercase">Billing details</p>
          <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4">
            <Input
              type="text"
              placeholder="Alexei Ward"
              id="name"
              label="Name"
            />
            <Input
              type="email"
              id="email"
              placeholder="alexei@mail.com"
              label="Email Address"
            />
          </div>
          <Input
            type="number"
            id="phone"
            placeholder="+1 202-555-0136"
            label="Phone Number"
          />

          <Input
            type="number"
            id="phone"
            placeholder="+1 202-555-0136"
            label="Phone Number"
          />

          <p className="uppercase text-primary mt-8 mb-4">shipping info</p>

          <Input
            type="text"
            id="address"
            placeholder="1137 Williams Avenue"
            label="Your Address"
          />
          <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4">
            <Input type="text" id="zip" placeholder="10001" label="Zip Code" />
            <Input type="text" id="city" placeholder="New York" label="City" />
          </div>

          <Input
            type="text"
            id="country"
            placeholder="United States"
            label="Country"
          />

          <p className="uppercase text-primary">payment details</p>

          <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4 md:items-start">
            <p className="capitalize text-black flex-1">Payment Method</p>

            <div className="flex flex-col flex-1">
              <div
                className={`h-[56px] flex items-center mt-4 rounded-[8px] hover:border-primary ${
                  isEMoney
                    ? "border-[1px] border-primary"
                    : "border-[1px] border-[#CFCFCF]"
                }`}
              >
                <input
                  type="radio"
                  id="emoney"
                  name="emoney"
                  checked={isEMoney}
                  className="mr-4 rounded-[8px] ml-2 accent-primary w-5 h-5 cursor-pointer "
                  onChange={() => {
                    setIsEMoney((old) => !old);
                    setIsCash((old) => false);
                  }}
                />
                <label
                  htmlFor="emoney"
                  className="cursor-pointer font-bold text-[14px] leading-[19.12px] -tracking-[.25px] text-black"
                >
                  e-Money
                </label>
              </div>
              <div
                className={`h-[56px] flex items-center mt-4 rounded-[8px] hover:border-primary ${
                  isCash
                    ? "border-[1px] border-primary"
                    : "border-[1px] border-[#CFCFCF]"
                }`}
              >
                <input
                  type="radio"
                  id="cash"
                  checked={isCash}
                  name="cash"
                  className="mr-4 rounded-[8px] ml-2 accent-primary w-5 h-5 cursor-pointer"
                  onChange={() => {
                    setIsCash((old) => !old);
                    setIsEMoney((old) => false);
                  }}
                />
                <label
                  htmlFor="cash"
                  className="cursor-pointer font-bold text-[14px] leading-[19.12px] -tracking-[.25px] text-black"
                >
                  Cash On Delivery
                </label>
              </div>
            </div>
          </div>
          {isEMoney && (
            <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-4">
              <Input
                type="number"
                id="enumber"
                placeholder="238521993"
                label="e-Money Number"
              />
              <Input
                type="number"
                id="epin"
                placeholder="6891"
                label="e-Money PIN"
              />
            </div>
          )}
          {isCash && (
            <div className="flex gap-x-8 items-center justify-center">
              <span>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                    fill="#D87D4A"
                  />
                </svg>
              </span>
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </form>

        {/* Summary section */}
        <div className="bg-white rounded-[8px] px-8 py-8 flex-1 h-max">
          <h6 className="text-black">summary</h6>
          {
            <div className="flex flex-col gap-y-6 ">
              {cartItems &&
                cartItems?.map((cartItem, index) => {
                  return <Summary key={index} item={cartItem} />;
                })}
            </div>
          }

          <div className="mt-10">
            <SummaryInfo label="total" amount="5,396" />
            <SummaryInfo label="SHIPPING" amount="50" />
            <SummaryInfo label=" VAT (INCLUDED)" amount="1,079" />
            <SummaryInfo label="GRAND TOTAL" amount="5,446" />
            <button className="btn btn-primary mt-8 block-level">
              Continue & pay
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
