import React from "react";
import Header from "./Header";
import { Provider } from "react-redux";
import Cart from "./Cart";
import store from "../redux/store";

const CartHome = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Cart />
      </div>
    </Provider>
  );
};

export default CartHome;
