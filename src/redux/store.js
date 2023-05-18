import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CartSlice";

const reducer = {
  cart: cartReducer,
};
export default configureStore({ reducer });
