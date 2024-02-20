
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
  


    increment: (state,action) => {
      state.cart[action.payload].quantity +=1
      state.cartTotal= state.cartTotal + state.cart[action.payload].price
    },



Decrement: (state,action) => {
  if(state.cart[action.payload].quantity > 0){
    state.cartTotal=state.cartTotal - state.cart[action.payload].price 
   }

   state.cart[action.payload].quantity =Math.max(0, state.cart[action.payload].quantity - 1)

}

    
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.type, (state, action) => {
        state.cart = [];
        state.cartTotal = 0;
      });
  },
});

export const { addToCart, removeCart, addCartData, increment,Decrement } = cartSlice.actions;
export default cartSlice.reducer;

