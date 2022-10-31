import React from "react";
import "./icon.style.scss";

const Icon = ({ children, url }) => (
  <div className="icon xyz-in" xyz="fade down big duration-10">
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  </div>
);

export default Icon;
