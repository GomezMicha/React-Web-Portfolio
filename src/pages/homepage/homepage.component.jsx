import React from "react";
import "./homepage.style.scss";

import { NavLink } from "react-router-dom";

import Icon from "../../components/icon/icon.component";
import { Linkedin, Github } from "react-bootstrap-icons";

const HomePage = () => (
  <main className="homepage">
    <div className="homepage-container">
      <div className="homepage-wrapper" xyz="fade stagger">
        <h1 className="xyz-in" xyz="inherit left">
          Hi, I am
        </h1>
        <h2 className="xyz-in" xyz="inherit left">
          <span>Spike</span> Spiegel
        </h2>
        <h3 className="xyz-in" xyz="inherit up">
          Front-End Developer
        </h3>
        <div className="text xyz-in" xyz="inherit up">
          <p>
            I am a bounty hunter and occasionally I write some code. Travel
            through space with my mates Jet, Faye, Ed, and Ein on the spaceship
            the Bebop. We have had a lot of crazy adventures along the way.
          </p>
        </div>
        <NavLink
          to={"/Contact"}
          exact="true"
          className="xyz-in"
          xyz="inherit down"
        >
          <button>Get In Touch</button>
        </NavLink>
      </div>
    </div>
    <footer id="footer">
      <div className="footer-icons">
        <Icon url="https://linkedin.com/">
          <Linkedin />
        </Icon>
        <Icon url="https://github.com/">
          <Github />
        </Icon>
      </div>
      <div className="footer-text">
        <small>
          Designed & built by{" "}
          <a href="https://michagomez.me" target="_blank" rel="noreferrer">
            Micha Gómez
          </a>
          . All rights reserved 2022.
        </small>
      </div>
    </footer>
  </main>
);

export default HomePage;
