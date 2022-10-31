import React from "react";
import "./page-not-found.style.scss";
import NotFound from "../../assets/page_not_found.svg";

import { NavLink } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <div className="page-not-found-header">
          <picture>
            <img src={NotFound} alt="404" />
          </picture>
          <h3>PAGE NOT FOUND</h3>
          <p>Oops! Someone is lost</p>
        </div>
        <div className="button-wrapper">
          <NavLink to={"/"} exact="true">
            <button>
              Go To Home <ArrowRight />
            </button>
          </NavLink>
        </div>
        <footer>
          <small>
            <a href="https://michagomez.me" target="_blank" rel="noreferrer">
              Images by Micha Gómez
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
};

export default PageNotFound;
