import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We're here to answer any questions you may have about our custom sheds
          and trailers.
        </p>
        <ul>
          <li>Phone: (123) 456-7890</li>
          <li>Email: info@canventures.com</li>
          <li>Address: 123 Main St, Toronto, ON M1M 1M1</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday: 10am - 2pm</p>
        <p>Sunday: Closed</p>
      </section>
    </div>
  );
}

export default Contact;
