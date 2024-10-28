import React from "react";
import { Link } from "react-router-dom";
import "./CustomTrailers.css";
// Import your trailer images
import trailer1 from "../assets/trailer1.png";
import trailer2 from "../assets/trailer2.png";
import trailer3 from "../assets/trailer3.png";
import trailer4 from "../assets/trailer4.png";
import trailer5 from "../assets/trailer5.png";
import trailer6 from "../assets/trailer6.png";
import trailer7 from "../assets/trailer7.png";
import trailer8 from "../assets/trailer8.png";
import trailer9 from "../assets/trailer9.png";
import trailer10 from "../assets/trailer10.png";
import trailer11 from "../assets/trailer11.png";
import trailer12 from "../assets/trailer12.png";

function CustomTrailers() {
  return (
    <div className="custom-trailers">
      <div className="custom-trailers-header">
        <h1>Custom Trailers</h1>
        <p>
          Discover our premium custom-built trailers, tailored to your vision.
          <br />
          <br /> We offer complete customization of size, features, and
          specifications to match your needs. Transform your trailer into the
          perfect hauling solution - from basic utility to specialized
          transport. Custom-built and delivered across Canada.
          <br />
          <br />
          Let us create your perfect blend of functionality and durability.
        </p>
      </div>

      <section className="trailer-gallery">
        <div className="trailer-grid">
          <div className="trailer-item">
            <img src={trailer1} alt="Custom Trailer Design 1" />
          </div>
          <div className="trailer-item">
            <img src={trailer2} alt="Custom Trailer Design 2" />
          </div>
          <div className="trailer-item">
            <img src={trailer3} alt="Custom Trailer Design 3" />
          </div>
          <div className="trailer-item">
            <img src={trailer4} alt="Custom Trailer Design 4" />
          </div>
          <div className="trailer-item">
            <img src={trailer5} alt="Custom Trailer Design 5" />
          </div>
          <div className="trailer-item">
            <img src={trailer6} alt="Custom Trailer Design 6" />
          </div>
          <div className="trailer-item">
            <img src={trailer7} alt="Custom Trailer Design 7" />
          </div>
          <div className="trailer-item">
            <img src={trailer8} alt="Custom Trailer Design 8" />
          </div>
          <div className="trailer-item">
            <img src={trailer9} alt="Custom Trailer Design 9" />
          </div>
          <div className="trailer-item">
            <img src={trailer10} alt="Custom Trailer Design 10" />
          </div>
          <div className="trailer-item">
            <img src={trailer11} alt="Custom Trailer Design 11" />
          </div>
          <div className="trailer-item">
            <img src={trailer12} alt="Custom Trailer Design 12" />
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Get Your Custom Trailer?</h2>
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

export default CustomTrailers;
