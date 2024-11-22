import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vsp04gt",
        "template_ru6c77i",
        formData,
        "cJkZQ-5MV5l-A9LQb"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset the form
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

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
            Email: <a href="mailto:info@canventures.ca">info@canventures.ca</a>
          </li>
          <li>Located just South of Ottawa</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone: (optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
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
