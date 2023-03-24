import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartState: false,
    cartItems: [],
    cartTotalAmount: 0,
    cartTotalQantity: 0,
  },
  reducers: {
    setCartState: (state, action) => {
      state.cartState = action.payload;
    },
    addCartItem: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0)
        state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity;
      else state.cartItems.push(action.payload);

      // Calculate the total Quantity too
      let { totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { cartQuantity } = cartItem;

          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalQTY: 0,
        }
      );

      state.cartTotalQantity = totalQTY;
    },
    increaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) state.cartItems[itemIndex].cartQuantity += 1;
    },
    decreaseItemQty: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1)
        state.cartItems[itemIndex].cartQuantity -= 1;
    },
    getTotals: (state, action) => {
      let { totalAmount, totalQTY } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;

          cartTotal.totalAmount += totalPrice;
          cartTotal.totalQTY += cartQuantity;

          return cartTotal;
        },
        {
          totalAmount: 0,
          totalQTY: 0,
        }
      );

      state.cartTotalAmount = totalAmount;
      state.cartTotalQantity = totalQTY;
    },

    removeItem: (state, action) => {
      console.log(action.payload.id);
      const leftItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(leftItems);
      //   console.log(leftItems);
      state.cartItems = leftItems;
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCartState,
  addCartItem,
  clearCart,
  removeItem,
  getTotals,
  decreaseItemQty,
  increaseItemQty,
} = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectGetTotals = (state) => state.cart.getTotals;
export const selectDecreeaseQty = (state) => state.cart.decreaseItemQty;
export const selectIncreaseQty = (state) => state.cart.increaseItemQty;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectCartTotalQantity = (state) => state.cart.cartTotalQantity;

export default cartSlice.reducer;
