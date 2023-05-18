import React, { Component } from "react";
import "./Order.css";
import { RiEBike2Fill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";

export default class Timer extends Component {
  state = {
    minutes: 30,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <>
        <div>
          {minutes === 0 && seconds === 0 ? (
            <h1 className="headingStyle">Order sucessfully delivered</h1>
          ) : (
            <div>
              <div className="styleHeader">
                <div class="fa-3x">
                  <i class="fa-solid fa-stopwatch fa-shake"></i>
                </div>
                <h2 className="headingStyle">
                  Time Remaining: {minutes}:
                  {seconds < 10 ? `0${seconds}` : seconds}
                </h2>
              </div>
              {minutes >= 29 && minutes <= 30 ? (
                <div className="thumsUp">
                  <h2 className="headingStyles">
                    Your order is confirmed and preparing
                  </h2>
                  <div class="fa-3x">
                    <i class="fa-solid fa-shake">
                      <FaThumbsUp />
                    </i>
                  </div>
                </div>
              ) : (
                <div className="thumsUp">
                  <h2 className="bikeStyle">Your order is on the way</h2>
                  <div class="fa-3x">
                    <i class="fa-solid fa-shake">
                      <RiEBike2Fill />
                    </i>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </>
    );
  }
}
