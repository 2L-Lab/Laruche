import React from "react";
import logo from "../styles/assets/img/logo.png";

const Logo = () => {
  return (
    <img
      className="logo"
      style={{ height: "80px", width: "100px" }}
      src={logo}
      alt="logo"
    />
  );
};

export default Logo;
