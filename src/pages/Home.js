import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function home() {
  return (
    <>
      <header className="hero">
        <div className="hero-heading">
          <h1>
            Hi,
            <br />
            I'm Ayush, <br />
            web developer
          </h1>
          <p>Full Stack Developer</p>

          <Link className="btn" to="./contact">
            Contact me!
          </Link>
        </div>
      </header>
      <About />
      <Contact />
    </>
  );
}

export default home;
