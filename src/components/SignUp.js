import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Login.css";

export default function SignUp() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert("Register Successfully");
    navigate("/login");
  };
  const externalImage = "https://hungerbay.com/assets/images/b6.jpg";

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
        <div className="col">
          <div className="card text-bg-dark text-white border-0">
            <div className="card-img-overlay d-flex flex-column text-black">
              <div className="container" style={{ paddingTop: "10%" }}>
                <center>
                  <h1
                    style={{ color: "white", fontSize: 45, marginBottom: 40 }}
                  >
                    SignUp
                  </h1>
                </center>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ marginLeft: 400, marginRight: 400 }}
                >
                  <div class="form-group">
                    <label for="exampleInputEmail1" className="emailStyle">
                      Name
                    </label>
                    <div className="nameStyle">
                      <input
                        type="text"
                        class="form-control"
                        {...register("name")}
                        id="exampleInputEmail1"
                        aria-describedby="name"
                        placeholder="Enter Name*"
                        required
                        className="inputStyle"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div className="emailText">
                      <label for="exampleInputEmail1" className="emailStyle">
                        Email address
                      </label>
                      <div className="nameStyle">
                        <input
                          type="email"
                          class="form-control"
                          {...register("emailHelp")}
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email*"
                          required
                          className="inputStyle"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div className="emailText">
                      <label for="exampleInputPassword1" className="emailStyle">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        {...register("password")}
                        id="exampleInputPassword1"
                        placeholder="Enter Password*"
                        required
                        className="inputStyle"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-outline-dark px-4 py-3"
                    className="submitBtn"
                  >
                    Submit
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
