import React from "react";
import { useLocation } from "react-router-dom";
import "./Order.css";
import TrackOrder from "./TrackOrder";

const Order = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h2
        style={{
          marginLeft: 10,
          padding: 10,
          backgroundColor: " rgb(187, 241, 241)",
        }}
      >
        Your Orders
      </h2>
      <div className="orderList">
        {location.state.orders.map((item) => (
          <div className="order">
            <img src={item.image} width={200} height={200}></img>
            <div className="orderDetail">
              <p style={{ fontWeight: "bold" }}>{item.title}</p>
              <p style={{ width: "250px" }}>{item.description}</p>
            </div>
          </div>
        ))}
        <h4>Total Price :{location.state.totalAmount}</h4>
      </div>
      <TrackOrder />
    </div>
  );
};

export default Order;
