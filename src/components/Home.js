import React, { useState } from "react";
import "../index.css";
import workData from "../workData";
import clientData from "../clientData";
import Card, { ClientCard } from "./Card";
import {
  FaArrowUp,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import Feeds from "./FeedBackdata";
import Carousel from "./Carousel";

function CreateCard(workData) {
  return (
    <Card
      key={workData.id}
      link={workData.link}
      title={workData.title}
      header={workData.header}
      desc={workData.desc}
    ></Card>
  );
}

function CreateClientcard(clientData) {
  return (
    <ClientCard key={clientData.id} imgurl={clientData.imglink}></ClientCard>
  );
}

function Home() {
  const [isnavspan, setnavspan] = useState(false);
  const [ishamburger, sethamburger] = useState(false);
  const [isvisible, setvisible] = useState(false);
  const [isdone, setdone] = useState(false);

  const togglevisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) setvisible(true);
    else if (scrolled <= 300) setvisible(false);
  };
  const checkDone = () => {
    setdone(!isdone);
  };
  window.addEventListener("contextmenu", checkDone);
  const toScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", togglevisible);

  const navToggle = () => {
    setnavspan(!isnavspan);
    sethamburger(!ishamburger);
  };

  const date = new Date();
  const CurYear = date.getFullYear();
  return (
    <div>
      {/* <div className="success-div" style={{ top: isdone ? "0" : "-55px" }}>
        <GiPartyPopper className="popper" />

        <div>
          {" "}
          <h2> Thanks for being awesome!</h2>
          <p>
            We have received your message and would like to thank you for
            writing to us.
          </p>{" "}
        </div>
      </div> */}
      <button
        className="toTop"
        onClick={toScrolltoTop}
        style={{ display: isvisible ? "inline" : "none" }}
      >
        <FaArrowUp />
      </button>
      <Link to="/FeedBackform">
        <button
          className="feedback-btn"
          style={{ display: isvisible ? "inline" : "none" }}
        >
          <VscFeedback className="icon" />
        </button>
      </Link>

      <div className="hero" id="hero">
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
            <li className="selected">
              <NavLink to="/" onClick={toScrolltoTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/Works"}>Works</NavLink>
            </li>
            <li>
              <NavLink to={"/Gallery"}>Gallery</NavLink>
            </li>

            <li>
              <NavLink to={"/Services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/Contact"}>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <h1>PixelEdit</h1>
          <div className="skills-list">
            <ul>
              <li>Photoshop</li>
              <li>Illustration</li>
              <li>Premiere Pro</li>
              <li>After Effects</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="work-wrapper">
        <h2>FEATURED</h2>
        <h1>WORKS</h1>
        <div className="featured-work">{workData.map(CreateCard)}</div>
        <Link to="./Works">
          <button className="btn" style={{ margin: "4rem auto" }}>
            View All Works
          </button>
        </Link>
      </div>

      <div className="clients-wrapper">
        <h2>AWESOME</h2>
        <h1>CLIENTS</h1>

        <div className="clients-section">
          {clientData.map(CreateClientcard)}
        </div>
      </div>

      <div className="service-wrapper">
        <h2>PROFESSIONAL</h2>
        <h1>SERVICES</h1>

        <div className="service-section">
          <div className="box">
            <span></span>
            <h2>Photoshop</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ad neque nemo libero aperiam temporibus, pariatur
              accusamus debitis perferendis quia sequi amet dolorum quasi odit
              sit amet consectetur adipisicing elit. Optio magnam molestias eos
              velit est a!
            </p>
          </div>
          <div className="box">
            <span></span> <h2>Illustration</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ad neque nemo libero aperiam temporibus, pariatur
              accusamus debitis perferendis quia sequi amet dolorum quasi odit
              sit amet consectetur adipisicing elit. Optio magnam molestias eos
              velit est a!
            </p>
          </div>
          <div className="box">
            <span></span> <h2>Premiere Pro</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ad neque nemo libero aperiam temporibus, pariatur
              accusamus debitis perferendis quia sequi amet dolorum quasi odit
              sit amet consectetur adipisicing elit. Optio magnam molestias eos
              velit est a!
            </p>
          </div>

          <div className="box">
            <span></span> <h2>After Effects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur ad neque nemo libero aperiam temporibus, pariatur
              accusamus debitis perferendis quia sequi amet dolorum quasi odit
              sit amet consectetur adipisicing elit. Optio magnam molestias eos
              velit est a!
            </p>
          </div>
        </div>

        <button className="btn" style={{ margin: "2rem auto" }}>
          Contact Me
        </button>
      </div>
      <div className="testimonial-wrapper">
        <Carousel Feeds={Feeds} />
      </div>

      <div className="subscribe-wrapper">
        <h2>
          Subscribe to my newsletter to receive <br />
          updates about new projects
        </h2>
        <form method="POST">
          <div className="input-box">
            <FiMail className="icon" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <div className="social-media-wrapper">
        <div className="contact">
          <div className="left-col">
            <h2>CONTACT ME</h2>
            <h1>Let's Work Together</h1>
            <div className="arrowpointer">
              <Link to="./Contact" className="link">
                <BiLeftArrow />
              </Link>
            </div>
          </div>
          <div className="right-col">
            <h2>HOW AM I?</h2>
            <h1>Learn More About Me</h1>

            <div className="arrowpointer">
              <Link to="./About" className="link">
                <BiRightArrow />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-wrapper">
        <h2>Sameer Shetty</h2>
        <div className="socio-handles">
          <a href="https://www.instagram.com/invites/contact/?i=1obzed76tejms&utm_content=k5q9ctw">
            <FaInstagram className="icon" />
          </a>
          |
          <a href="https://twitter.com/SameerShetty20?t=Da6eyan9XPPgT5iK7cz8DQ&s=09">
            <FaTwitter className="icon" />
          </a>
          |
          <a href="https://www.linkedin.com/in/sameer-shetty-478481217">
            <FaLinkedinIn className="icon" />
          </a>
          |
          <a href="https://github.com/SameerShetty">
            <FaGithub className="icon" />
          </a>
          |
          <a href="mailto:Kalyanshettisameer@gmail.com">
            <FiMail className="icon" />
          </a>
        </div>
        <div className="copyright-section">
          <p>Copyright &#169; {CurYear}</p>
          <p>
            Made with{" "}
            <FaHeart
              className="icon"
              style={{
                color: "red",
                verticalAlign: "text-bottom",
                padding: ".1rem",
              }}
            />{" "}
            by Sameer Shetty
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
