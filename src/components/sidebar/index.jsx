import React from "react";
import "./styles.css";
import fb from "../../assets/fb.png";
import tw from "../../assets/tw.png";
import ig from "../../assets/ig.png";
import info from "../../assets/info.png";
import share from "../../assets/share.png";
import hamburger from "../../assets/menu.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="hamburger">
        <img src={hamburger} alt="logo-hamburger" />
      </div>
      <div className="links-social">
        <img className="link-social" src={fb} alt="logo-fb" />
        <img className="link-social" src={ig} alt="logo-ig" />
        <img className="link-social" src={tw} alt="logo-tw" />
      </div>
      <div className="links-share">
        <img className="link-share" src={share} alt="logo-share" />
        <img className="link-share" src={info} alt="logo-info" />
      </div>
    </div>
  );
}

export default Sidebar;
