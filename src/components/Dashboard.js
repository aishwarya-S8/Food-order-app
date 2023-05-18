import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "../redux/store";

const Dashboard = () => {
  return (
    <>
      <Provider store={store}>
        <Header></Header>
        <Body />
      </Provider>
    </>
  );
};

export default Dashboard;
