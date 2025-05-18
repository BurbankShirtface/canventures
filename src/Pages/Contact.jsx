import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch("https://formspree.io/f/mgvkdgzq", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          error: result.errors
            ? result.errors.map((err) => err.message).join(", ")
            : "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "Failed to send message. Please try again later.",
      });
    }
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
        {status.success && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}
        {status.error && <div className="error-message">{status.error}</div>}
        <form
          action="https://formspree.io/f/mgvkdgzq"
          method="POST"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status.loading}
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
              disabled={status.loading}
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
              disabled={status.loading}
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
              disabled={status.loading}
            ></textarea>
          </div>
          <button type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>
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
