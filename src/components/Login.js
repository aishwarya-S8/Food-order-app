import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const productPage = () => {
    navigate("/dashboard");
  };
  const signUpPage = () => {
    navigate("/signup");
  };
  const externalImage = "https://wallpaperaccess.com/full/4117465.jpg";

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "770px",
        }}
      >
        <div>
          <div>
            <div>
              <div style={{ paddingTop: "10%" }}>
                <center>
                  <h1 style={{ color: "white", fontSize: "45px" }}>Login</h1>
                </center>
                <form
                  onSubmit={productPage}
                  style={{
                    margin: 20,
                    marginLeft: 550,
                    padding: 20,
                    marginRight: 500,
                  }}
                >
                  <div class="form-group">
                    <label
                      for="exampleInputEmail1"
                      style={{
                        fontSize: 18,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Email address
                    </label>
                    <div className="emailInput">
                      <input
                        type="email"
                        class="form-control"
                        {...register("email")}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email*"
                        required
                        style={{
                          padding: 5,
                          borderRadius: 5,
                          paddingRight: " 60%",
                          marginBottom: 20,
                        }}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label
                      for="exampleInputPassword1"
                      style={{
                        fontSize: 18,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Password
                    </label>
                    <div className="emailInput">
                      <input
                        type="password"
                        class="form-control"
                        {...register("password")}
                        id="exampleInputPassword1"
                        placeholder="Enter Password*"
                        required
                        style={{
                          padding: 5,
                          borderRadius: 5,
                          paddingRight: " 60%",
                        }}
                      />
                    </div>
                  </div>

                  <button type="submit" className="submitBtn">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
