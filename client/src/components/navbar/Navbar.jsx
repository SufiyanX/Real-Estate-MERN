import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/icons/logo1.png";
import MenuIcon from "../../assets/icons/menu.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src={Logo} />
          <span>SufiEstate</span>
        </a>
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
        <a>Agents</a>
      </div>
      <div className="right">
        <a>Sign In</a>
        <a className="register">Sign Up</a>
        <img
          className="menuIcon"
          src={MenuIcon}
          onClick={() => {
            setOpen(!open);
            console.log(open);
          }}
        />
        <div className={open ? "menu active" : "menu"}>
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
          <a>Agents</a>
          <a>Sign in</a>
          <a>Sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
