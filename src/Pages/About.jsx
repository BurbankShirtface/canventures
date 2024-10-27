import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About CanVentures</h1>

      <section className="company-intro">
        <h2>Our Story</h2>
        <p>
          CanVentures is your premier distributor of custom-built sheds and
          trailers. Founded in [year], we've been committed to providing
          top-quality storage and transportation solutions to our customers.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to deliver personalized, high-quality sheds and
          trailers that meet the unique needs of each customer. We envision a
          future where every Canadian has access to customized storage and
          transportation solutions that enhance their lifestyle.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        {/* Add team member information here */}
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Integrity</li>
        </ul>
      </section>

      <section className="cta">
        <h2>Ready to Work with Us?</h2>
        <p>Contact us today to start your custom shed or trailer project.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
}

export default About;
