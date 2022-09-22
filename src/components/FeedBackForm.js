import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

function FeedBackForm() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);

  const navToggle = () => {
    setnavspan(!isnavspan);
    sethamburger(!ishamburger);
  };
  return (
    <div>
      <h1 className="page-primary-heading-contact feed-header">
        FEEDBACK
        <hr style={{ borderColor: "#3f72af" }} />
      </h1>

      <div className="page-container">
        <div className="left-box">
          <img src="../../imgs/Feed-img.jpg" alt="Feedback-img" />
        </div>
        <div className="right-box" style={{ backgroundColor: "#1e2022" }}>
          <div className="contact-secondary-container">
            <form method="POST">
              <label for="name"> NAME :</label>
              <input
                id="name"
                type="name"
                name="name"
                placeholder="Your name"
                required
                autoFocus
              />

              <label for="msg">MESSAGE :</label>
              <textarea
                id="msg"
                name="message"
                placeholder="Hey! Type in your Feedback here..."
                required
                style={{
                  resize: "vertical",
                  maxHeight: "350px",
                  minHeight: "200px",
                }}
              />

              <button
                value="submit"
                className="btn"
                type="submit"
                style={{ margin: "2rem 0 2.5rem", alignSelf: "flex-start" }}
              >
                Send Feedback
              </button>
            </form>
          </div>
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
            <NavLink to={"/Gallery "}>Gallery </NavLink>
          </li>

          <li>
            {" "}
            <NavLink to={"/Service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/About"}>About</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default FeedBackForm;
