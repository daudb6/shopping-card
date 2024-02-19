
import { createSlice } from "@reduxjs/toolkit";
import { logout } from "./authSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      state.cartTotal += action.payload.price; 
     
 
    },
    removeCart: (state, action) => {
      const removedItem = state.cart[action.payload];
      state.cart = state.cart.filter((v, id) => id !== action.payload);
      state.cartTotal -= removedItem.price;
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.type, (state, action) => {
        state.cart = [];
        state.cartTotal = 0;
      });
  },
});

export const { addToCart, removeCart, addCartData } = cartSlice.actions;
export default cartSlice.reducer;

