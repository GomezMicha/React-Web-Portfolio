import React from "react";
import "./form-group.style.scss";

const FormGroup = ({ id, noMargin, ...otherProps }) => {
  return (
    <div className={`${noMargin ? "form-group no-margin" : "form-group"}`}>
      <label htmlFor="name" />
      <input id={id} {...otherProps} />
    </div>
  );
};

export default FormGroup;
