import React from "react";
import { GrCart } from "react-icons/gr";
import "./Header.css";
import Grid from "@mui/material/Grid";
import { blue, red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <Grid container spacing={2} className="grid">
        <Grid item xs={10} md={10}>
          <h2 className="header"> Food Order App</h2>
        </Grid>
        <Grid item xs={2} md={2}>
          <div
            onClick={navigateToCart}
            style={{ position: "relative", cursor: "pointer" }}
          >
            <GrCart size={30} className="cartimg"></GrCart>
            <span className="cartStyle">{cart.length}</span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
