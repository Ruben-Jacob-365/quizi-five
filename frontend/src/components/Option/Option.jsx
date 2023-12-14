import PropTypes from "prop-types";
import React from "react";
import "./Option.css";

export const Option = ({
  className,
  ellipse = "https://c.animaapp.com/vwJUqA8K/img/ellipse-41.svg",
  ellipseClassName,
  ellipseClassNameOverride,
  divClassName,
  text = "A",
}) => {
  return (
    <div className={`option-id ${className}`}>
      <div className={`div ${ellipseClassName}`} />
      {/* <div className={`ellipse-2 ${ellipseClassNameOverride}`} /> */}
      {/* <img className="img" alt="Ellipse" src={ellipse} /> */}
      <div className={`a ${divClassName}`}>{text}</div>
    </div>
  );
};

Option.propTypes = {
  ellipse: PropTypes.string,
  text: PropTypes.string,
};
