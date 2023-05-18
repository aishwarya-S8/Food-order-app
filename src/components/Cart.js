import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartSlice";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MdPayments } from "react-icons/md";
import { Form, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShowChartOutlined } from "@mui/icons-material";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const decreaseItem = (item) => {
    dispatch(decrementQuantity(item));
  };
  const increaseItem = (item) => {
    dispatch(incrementQuantity(item));
  };
  const [selectedOption, setSelectedOption] = useState("");
  const options = [
    { id: 1, value: "Cash on delivery", label: "Cash on delivery" },
    { id: 2, value: "UPI", label: "UPI" },
  ];
  const AmountRadioButton = {
    color: "#829DB6",
    "&.Mui-checked": {
      color: "blue",
    },
  };
  const charge = 50;
  const navigate = useNavigate();
  const orders = [...cart];
  const removeCart = (item) => {
    dispatch(removeFromCart(item));
  };
  console.log(cart);

  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);

  const totalAmount = total + 50;

  const notify = () => {
    toast("Order placed !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {
      navigate("/order", {
        state: {
          orders: orders,
          totalAmount: totalAmount,
        },
      });
    }, 3500);
    setTimeout(() => {
      dispatch(cleanCart());
    }, 4000);
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  return (
    <>
      <ToastContainer />
      <div className="cart">
        <div className="leftCart">
          <div>
            {cart.map((item) => (
              <div className="cartContainer">
                {" "}
                <img src={item.image} height={200} width={200}></img>
                <div className="leftCartContainer">
                  <h6>{item.title}</h6>
                  <p>
                    {item.description.length > 80
                      ? item.description.substr(0, 80)
                      : item.description}
                  </p>
                  <h6>{item.price}</h6>
                </div>
                <div className="cartButtonContainer">
                  <div>
                    {" "}
                    <button
                      className="btnStyle"
                      onClick={() => decreaseItem(item)}
                    >
                      -
                    </button>
                    <button className="btnStyle">{item.quantity}</button>
                    <button
                      className="btnStyle"
                      onClick={() => increaseItem(item)}
                    >
                      +
                    </button>{" "}
                  </div>

                  <button
                    className="cartButton"
                    onClick={() => removeCart(item)}
                  >
                    Remove item
                  </button>
                  <h5 style={{ fontSize: 17, marginTop: 13 }}>
                    {item.price * item.quantity}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rightCart">
          <form onSubmit={handleSubmit((data) => console.log(data))}>
            <div className="locationRight">
              {" "}
              <LocationOnIcon style={{ color: "grey", marginTop: "15px" }} />
              <div className="location">
                {" "}
                <p className="cartRightText">Select your location</p>
                <p className="cartRightText" style={{ marginTop: -12 }}>
                  Please Select a location so we can find you!
                </p>
              </div>
            </div>
            <div className="locationRight">
              {" "}
              <LocationOnIcon style={{ color: "grey", marginTop: "15px" }} />
              <p className="locationText">Your Current address</p>
            </div>
            <input
              className="address"
              id="address"
              {...register("address", {
                required: true,
                minLength: 10,
              })}
              placeholder="Please specify your address"
            ></input>
            {errors.address?.type === "required" && (
              <p className="text-danger">The address field is required</p>
            )}
            {errors.address?.type === "minLength" && (
              <p className="text-danger">
                The address must be 10 charcters long
              </p>
            )}
            <div className="payment">
              {" "}
              <MdPayments
                size={23}
                style={{ color: "grey", marginTop: "15px" }}
              />
              <p className="locationText">Select your Payment type</p>
            </div>
            <FormControl component="fieldset" className="radio">
              <RadioGroup
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                row
              >
                {options.map((option) => (
                  <FormControlLabel
                    key={option.id}
                    value={option.value}
                    control={<Radio sx={AmountRadioButton} />}
                    label={option.label}
                    style={{ marginRight: "40px" }}
                    id="radiogroup"
                    {...register("radiogroup", {
                      required: true,
                    })}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            {selectedOption == "UPI" && (
              <input
                className="address"
                placeholder="Please enter your UPI"
                style={{ marginBottom: 13 }}
                id="upi"
                {...register("upi", {
                  required: true,
                })}
              ></input>
            )}
            {errors.upi?.type === "required" && (
              <p className="text-danger">The address field is required</p>
            )}

            <Grid container width={450} columns={16}>
              <Grid item xs={8}>
                <p>Total</p>
              </Grid>
              <Grid item xs={8}>
                <p>{total}</p>
              </Grid>
              <Grid item xs={8}>
                <p>Discount</p>
              </Grid>
              <Grid item xs={8}>
                <p>-</p>
              </Grid>
              <Grid item xs={8}>
                <p>Charges</p>
              </Grid>
              <Grid item xs={8}>
                <p>{charge}</p>
              </Grid>
              <Grid item xs={8}>
                <h3>Total Price</h3>
              </Grid>
              <Grid item xs={8}>
                <h3>{total + 50}</h3>
              </Grid>
            </Grid>
            <button
              className="orderButton"
              onClick={notify}
              disabled={!isValid}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Cart;
