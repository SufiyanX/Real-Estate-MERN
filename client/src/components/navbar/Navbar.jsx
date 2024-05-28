import React, { useState } from "react";
import "./navbar.scss";
import Logo from "../../assets/icons/logo1.png";
import MenuIcon from "../../assets/icons/list.png";
import BackIcon from "../../assets/icons/back.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = false;

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
        {user ? (
          <div className="user">
            <img src="https://st3.depositphotos.com/1135494/36086/i/450/depositphotos_360863948-stock-photo-white-background-studio-photograph-young.jpg" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a>
              <Link to="/login">Sign In</Link>
            </a>
            <a className="register">
              <Link to="/register">Sign Up</Link>
            </a>
          </>
        )}
        <img
          className="menuIcon"
          src={open ? BackIcon : MenuIcon}
          onClick={() => {
            setOpen(!open);
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
