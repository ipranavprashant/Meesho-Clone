import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartCount: 0,
  },
  reducers: {
    incrementCartCount: (state, action) => {
      state.cartCount += action.payload;
    },
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    decrementCartCount: (state, action) => {
      state.cartCount -= action.payload;
    },
    clearCart: (state, action) => {
      console.log("cleared cart->", action);
      state.cartCount = 0;
    },
  },
});

export const {
  incrementCartCount,
  setCartCount,
  decrementCartCount,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
