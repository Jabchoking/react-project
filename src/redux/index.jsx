import { configureStore } from "@reduxjs/toolkit";
import dataReduer from "./item/listSlice";
import userReduer from "./item/UserSlice";
import SignUpReduer from "./item/LoginSignUp";
export const store = configureStore({
  reducer: {
    data: dataReduer,
    user: userReduer,
    signup: SignUpReduer,
  },
});
