import React from "react";
import "./CustomSheds.css";
import { Link } from "react-router-dom";
// Import your shed images
import shed1 from "../assets/shed1.png";
import shed2 from "../assets/shed2.png";
import shed3 from "../assets/shed3.png";
import shed4 from "../assets/shed4.png";
import shed5 from "../assets/shed5.png";
import shed6 from "../assets/shed6.png";
import shed7 from "../assets/shed7.png";
import shed8 from "../assets/shed8.png";
import shed9 from "../assets/shed9.png";
import shed10 from "../assets/shed10.png";
import shed11 from "../assets/shed11.png";
import shed12 from "../assets/shed12.png";

function CustomSheds() {
  return (
    <div className="custom-sheds">
      <div className="custom-sheds-header">
        <h1>
          <span className="red">CAN</span>Sheds
        </h1>
        <p>
          Discover our premium custom-built and pre-constructed sheds, tailored
          to your vision and built to last.
          <br />
          <br />
          Crafted locally in Ontario, Canada, our sheds are built using premium
          Canadian lumber whenever possible, ensuring quality and durability.
          <br />
          <br />
          Whether you need basic storage or a fully insulated tiny home or
          office, our structures meet Ontario Building Code standards, and
          drawings can be provided. We handle delivery to your location, with
          on-site assembly and further customization available if needed.
          <br />
          <br /> We provide the perfect blend of functionality and style,
          designed just for you.
        </p>
      </div>

      <section className="shed-gallery">
        <div className="shed-grid">
          <div className="shed-item">
            <img src={shed1} alt="Custom Shed Design 1" />
          </div>
          <div className="shed-item">
            <img src={shed2} alt="Custom Shed Design 2" />
          </div>
          <div className="shed-item">
            <img src={shed3} alt="Custom Shed Design 3" />
          </div>
          <div className="shed-item">
            <img src={shed4} alt="Custom Shed Design 4" />
          </div>
          <div className="shed-item">
            <img src={shed5} alt="Custom Shed Design 5" />
          </div>
          <div className="shed-item">
            <img src={shed6} alt="Custom Shed Design 6" />
          </div>
          <div className="shed-item">
            <img src={shed7} alt="Custom Shed Design 7" />
          </div>
          <div className="shed-item">
            <img src={shed8} alt="Custom Shed Design 8" />
          </div>
          <div className="shed-item">
            <img src={shed9} alt="Custom Shed Design 9" />
          </div>
          <div className="shed-item">
            <img src={shed10} alt="Custom Shed Design 10" />
          </div>
          <div className="shed-item">
            <img src={shed11} alt="Custom Shed Design 11" />
          </div>
          <div className="shed-item">
            <img src={shed12} alt="Custom Shed Design 12" />
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Your New Shed?</h2>
        <p>
          Contact us today to discuss your specific requirements and get a free
          quote.
        </p>
        <Link to="/contact" className="contact-button">
          Get A Free Quote
        </Link>
      </section>
    </div>
  );
}

export default CustomSheds;
