import React from "react";
import "./sidebar.style.scss";

import Icon from "../icon/icon.component";
import { Linkedin, Github } from "react-bootstrap-icons";

const SideBar = () => (
  <section
    className="sidebar xyzz-in"
    xyz="small-100% origin-bottom-left duration-10"
  >
    <div className="icons">
      <Icon url="https://linkedin.com">
        <Linkedin />
      </Icon>
      <Icon url="https://github.com/">
        <Github />
      </Icon>
    </div>
    <div className="sidebar-text">
      <small>
        Designed & built by{" "}
        <a href="https://michagomez.me" target="_blank" rel="noreferrer">
          Micha Gómez
        </a>
        . All rights reserved 2022.
      </small>
    </div>
  </section>
);

export default SideBar;
