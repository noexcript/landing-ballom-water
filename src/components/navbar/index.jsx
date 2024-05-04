import React from "react";
import nav_logo from "../../assets/logo.png";
import Button from "../button";
import "./styles.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={nav_logo} alt="logo-navbar" className="nav-logo" />
      <Button text="Sign up" />
    </div>
  );
}

export default Navbar;
