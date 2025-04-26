import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; 2023 <span className="red">CAN</span>Ventures. All rights
          reserved.
        </p>
        <nav className="footer-nav">
          {/* <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link> */}
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
