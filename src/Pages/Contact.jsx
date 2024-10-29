import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Contact us today for a free estimate or consultation on your new
          custom shed or trailer.
        </p>
        <ul>
          <li>
            Phone: <a href="tel:5198302453">(519) 830-2453</a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:info@canventures.ca">
              info@canventures.ca
            </a>
          </li>
          <li>Address: 10965 Van Camp Rd, Mountain, Ontario</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form autoComplete="off">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: (optional)</label>
            <input type="tel" id="phone" name="phone" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
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
        <p>Open 7 days a week: 7am - 7pm</p>
      </section>
    </div>
  );
}

export default Contact;
