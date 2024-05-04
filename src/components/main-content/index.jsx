import MainContentMain from "../main-content-main";
import "./styles.css";
import React from "react";

function MainContent({ children }) {
  return <div className="main-content">{children}</div>;
}

export default MainContent;
