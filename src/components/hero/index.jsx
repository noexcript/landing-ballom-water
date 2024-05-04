import React from "react";
import Button from "../button";
import "./styles.css";

function Hero() {
  return (
    <div className="hero">
      <p className="hero-welcome">Welcome to our</p>
      <h4 className="hero-title">
        World's <br />
        Creative Studio
      </h4>
      <Button text="Take a tour" />
    </div>
  );
}

export default Hero;
