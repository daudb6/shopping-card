import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name:"auth",
  initialState:{
    login:"true"
  },
  reducers:{
    login: (state,action) => {
      state.login = "logout"

    },
    logout: (state,action) => {
      state.login = "true"

    }
  }
})
export const {login,logout} = authSlice.actions
export default authSlice.reducer