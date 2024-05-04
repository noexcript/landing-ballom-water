import React from "react";
import bubble from "../../assets/bubble.png";
import "./styles.css";
function Bubbles() {
  return (
    <div className="bubbles">
      <img src={bubble} alt="bubble-1" />
      <img src={bubble} alt="bubble-2" />
      <img src={bubble} alt="bubble-3" />
      <img src={bubble} alt="bubble-4" />
      <img src={bubble} alt="bubble-5" />
      <img src={bubble} alt="bubble-6" />
      <img src={bubble} alt="bubble-7" />
    </div>
  );
}

export default Bubbles;
