import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Welcome() {
  const externalImage =
    "https://img.freepik.com/free-photo/vintage-old-rustic-cutlery-dark_1220-4886.jpg?w=2000";
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundImage: `url(${externalImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "770px",
        }}
      >
        <nav className="mainMenu">
          <ul className="menuOptions">
            <div className="card text-bg-dark text-white border-0">
              <div className="card-img-overlay d-flex flex-column">
                <div classNameName="container">
                  <center>
                    <h5
                      className="card-title display-3 text-white fw-bolder mb-0"
                      style={{ marginTop: "10%" }}
                    >
                      WELCOME
                    </h5>
                  </center>
                </div>
                <NavLink
                  className="btn btn-outline-light px-4 py-2 "
                  style={{
                    width: 600,
                    marginTop: "7%",
                    border: "bold",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "32%",
                  }}
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn btn-outline-light px-4 py-2"
                  style={{
                    width: 600,
                    marginTop: "10%",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginLeft: "32%",
                  }}
                  to="/signup"
                >
                  Signup
                </NavLink>
                {/* </div> */}
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Welcome;
