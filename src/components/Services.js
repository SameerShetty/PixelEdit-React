import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../index.css";

function Services() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);

  const navToggle = () => {
    setnavspan(!isnavspan);
    sethamburger(!ishamburger);
  };
  return (
    <div>
      <h1 className="page-primary-heading">
        SERVICES
        <hr />
      </h1>

      <div className="page-container">
        <div className="left-box">
          <img src="../../imgs/services-img.jpg" alt="service-img" />
        </div>
        <div className="right-box">
          <div className="service-secondary-container">
            <div className="box">
              <span></span>
              <h2>Photoshop</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ad neque nemo libero aperiam temporibus, pariatur
                accusamus debitis perferendis quia sequi amet dolorum quasi odit
                sit amet consectetur adipisicing elit. Optio magnam molestias
                eos velit est a!
              </p>
            </div>
            <div className="box">
              <span></span> <h2>Illustration</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ad neque nemo libero aperiam temporibus, pariatur
                accusamus debitis perferendis quia sequi amet dolorum quasi odit
                sit amet consectetur adipisicing elit. Optio magnam molestias
                eos velit est a!
              </p>
            </div>
            <div className="box">
              <span></span> <h2>Premiere Pro</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ad neque nemo libero aperiam temporibus, pariatur
                accusamus debitis perferendis quia sequi amet dolorum quasi odit
                sit amet consectetur adipisicing elit. Optio magnam molestias
                eos velit est a!
              </p>
            </div>

            <div className="box">
              <span></span> <h2>After Effects</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur ad neque nemo libero aperiam temporibus, pariatur
                accusamus debitis perferendis quia sequi amet dolorum quasi odit
                sit amet consectetur adipisicing elit. Optio magnam molestias
                eos velit est a!
              </p>
            </div>
          </div>
          <Link
            to="/Contact"
            style={{ position: "fixed", bottom: "1rem", right: "1.5rem" }}
          >
            <button className="btn" style={{ backgroundColor: "#1e2022" }}>
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className="nav-toggler" onClick={navToggle}>
        <div>
          <span
            className="bar-1"
            style={{
              transform: ishamburger
                ? "translateY(-4.5px) rotate(45deg)"
                : "none",
            }}
          ></span>
          <span
            className="bar-2"
            style={{ opacity: ishamburger ? "0" : "1" }}
          ></span>
          <span
            className="bar-3"
            style={{
              transform: ishamburger
                ? "translateY(-1px) rotate(-45deg)"
                : "none",
            }}
          ></span>
        </div>
      </div>

      <nav
        className="navpan"
        id="navpan"
        style={{ right: isnavspan ? "0" : "-240px" }}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to={"/Works"}>Works</NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/Gallery"}>Gallery </NavLink>
          </li>

          <li className="selected">Services</li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Services;
