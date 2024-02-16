import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
 const store = configureStore({
  reducer:{
    cartReducer,

  }
 })
 export default store;