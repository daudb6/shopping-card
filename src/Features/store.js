import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import authreducer from "./authSlice";
 const store = configureStore({
  reducer:{
    cartReducer,
    authreducer,
  }
 })
 export default store;