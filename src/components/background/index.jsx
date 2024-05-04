import "./styles.css";
import React from "react";
import background from "../../assets/background.png";

function Background() {
  return (
    <div className="background">
      <img src={background} alt="background-overlay" /> 
    </div>
  );
}

export default Background;
