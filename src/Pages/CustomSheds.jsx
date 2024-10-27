import React from "react";
import "./CustomSheds.css";

function CustomSheds() {
  return (
    <div className="custom-sheds">
      <h1>Custom Sheds</h1>
      <p>
        Explore our range of high-quality, custom-built sheds designed to meet
        your specific storage needs.
      </p>

      <section className="shed-categories">
        <h2>Our Shed Categories</h2>
        {/* Add categories here */}
      </section>

      <section className="featured-sheds">
        <h2>Featured Sheds</h2>
        {/* Add featured sheds here */}
      </section>

      <section className="custom-options">
        <h2>Customization Options</h2>
        {/* Add customization options here */}
      </section>

      <section className="cta">
        <h2>Ready to Get Your Custom Shed?</h2>
        <p>
          Contact us today to discuss your specific requirements and get a
          quote.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default CustomSheds;
