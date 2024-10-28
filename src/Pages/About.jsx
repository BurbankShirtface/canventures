import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about">
      <h1>About CanVentures</h1>

      <div className="about-header">
        <section className="company-intro">
          <h2>Our Story</h2>
          <p>
            CanVentures is Canada's premier distributor of custom-built sheds
            and trailers. Founded in 2023, we're committed to providing
            top-quality storage and transportation solutions to our customers.
          </p>
        </section>

        <section className="mission-vision">
          <h2>Our Mission & Vision</h2>
          <p>
            Our mission is to deliver personalized, high-quality sheds and
            trailers that meet the unique needs of each customer. We strive to
            provide an exceptional customer experience from initial consultation
            through to delivery, ensuring every interaction is professional,
            helpful, and easy.
          </p>
        </section>
      </div>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <h3>Beckner & Sons Trailers</h3>
            <p>Custom Trailer Specialists</p>
            <p>
              Experts in custom trailer manufacturing, delivering high-quality,
              personalized trailer solutions for every need.
            </p>
          </div>
          <div className="team-member">
            <h3>Sheds of Junetown</h3>
            <p>Custom Shed Specialists</p>
            <p>
              Masters of custom shed construction, creating premium storage
              solutions tailored to each customer's specifications.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Customer Satisfaction</li>
          <li>Innovation</li>
          <li>Integrity</li>
        </ul>
      </section> */}

      <section className="cta">
        <h2>Ready to Work with Us?</h2>
        <p>Contact us today to start your custom shed or trailer project.</p>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

export default About;
