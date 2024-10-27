import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoSmall.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="CanVentures Logo" />
            <p className="logo-text">
              <span className="red">CAN</span>Ventures
            </p>
          </Link>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/custom-sheds">Custom Sheds</Link>
            </li>
            <li>
              <Link to="/custom-trailers">Custom Trailers</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
