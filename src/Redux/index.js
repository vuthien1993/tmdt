import { configureStore } from "@reduxjs/toolkit";
import showPopUpReducer from "./showPopUp";
import loginReducer from "./login";
import cartReducer from "./cart";

const store = configureStore({
  reducer: {
    showPopUp: showPopUpReducer,
    login: loginReducer,
    cartReducer: cartReducer,
  },
});
export default store;
