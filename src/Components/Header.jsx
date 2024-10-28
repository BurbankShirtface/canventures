import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/LogoSmall.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/custom-sheds" onClick={toggleMenu}>
                Custom Sheds
              </Link>
            </li>
            <li>
              <Link to="/custom-trailers" onClick={toggleMenu}>
                Custom Trailers
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
