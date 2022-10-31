import React, { useState, useEffect } from "react";
import "./navigation.style.scss";
import LINKS_DATA from "./nav-data";

import Logo from "../../assets/logo.svg";

import { NavLink } from "react-router-dom";
import { MenuButtonWideFill } from "react-bootstrap-icons";

const Navigation = () => {
  const [showOn, setShowOn] = useState(false);

  const [LinksData] = useState(LINKS_DATA);

  const [resizeWindow, setResizeWindow] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    // Store window innerWidth value to display icons in navigation menu.
    const handleResize = () => {
      setResizeWindow({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    // Clean up Component
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Show or hide navigation menu for mobile devices.
  const navToggler = () => {
    setShowOn(!showOn);
  };

  return (
    <nav
      className="main-nav xyz-in"
      role="navigation"
      aria-label="main navigation"
      xyz="small-100% origin-left"
    >
      <header className="logo">
        <NavLink to={"/"} exact="true">
          <img src={Logo} alt="LOGO" />
        </NavLink>
      </header>
      <div className="nav-toggler">
        <MenuButtonWideFill onClick={navToggler} />
      </div>
      <div className={`nav-container ${showOn ? "collapse" : ""}`}>
        {LinksData.map((item) => (
          <NavLink
            key={item.text}
            className="nav-item"
            to={`${item.text === "Home" ? "/" : item.text}`}
            exact="true"
          >
            {resizeWindow.width <= 767 ? item.icon : item.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
