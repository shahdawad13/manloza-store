import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">

      {/* Page Header */}
      <section className="page-hero">
        <div className="container">

          <span className="section-label">
            GET IN TOUCH
          </span>

          <h1 className="page-title">
            Contact Us
          </h1>

          <p>
            Have a question or need help? We'd love to
            hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">

          <div className="contact-grid">

            {/* Contact Information */}
            <div className="contact-info">

              <span className="section-label">
                CONTACT DETAILS
              </span>

              <h2 className="section-title">
                Let's talk.
              </h2>

              <p>
                Whether you have a question about a product,
                your order, or simply want to say hello,
                feel free to contact us.
              </p>

              {/* Email */}
              <div className="contact-item">

                <div className="contact-item-icon">
                  @
                </div>

                <div>
                  <span>Email</span>

                  <a href="mailto:hello@manlozastore.com">
                    hello@manlozastore.com
                  </a>
                </div>

              </div>

              {/* Phone */}
              <div className="contact-item">

                <div className="contact-item-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>

                  <a href="tel:+201000000000">
                    +20 100 000 0000
                  </a>
                </div>

              </div>

              {/* Working Hours */}
              <div className="contact-item">

                <div className="contact-item-icon">
                  ◷
                </div>

                <div>
                  <span>Working Hours</span>

                  <strong>
                    Saturday – Thursday
                  </strong>

                  <small>
                    10:00 AM – 8:00 PM
                  </small>
                </div>

              </div>

              {/* Social */}
              <div className="contact-social">

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  f
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  ◎
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  in
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  &lt;/&gt;
                </a>

              </div>

            </div>

            {/* Contact Form */}
            <div className="contact-form">

              <div className="form-header">
                <span className="section-label">
                  SEND A MESSAGE
                </span>

                <h2>
                  How can we help?
                </h2>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="form-grid">

                  {/* Name */}
                  <div className="form-group">

                    <label htmlFor="name">
                      Full Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />

                  </div>

                  {/* Email */}
                  <div className="form-group">

                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                    />

                  </div>

                </div>

                {/* Subject */}
                <div className="form-group">

                  <label htmlFor="subject">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                  />

                </div>

                {/* Message */}
                <div className="form-group">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="6"
                    required
                  ></textarea>

                </div>

                {/* Success Message */}
                {submitted && (
                  <div className="form-success">
                    <span>✓</span>

                    <p>
                      Thank you! Your message has been
                      received successfully.
                    </p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="primary-btn form-submit"
                >
                  Send Message
                  <span>→</span>
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="promo-banner">
        <div className="container promo-inner">

          <div className="promo-content">
            <span>
              MANLOZA STORE
            </span>

            <h2>
              We're always
              <br />
              happy to help.
            </h2>
          </div>

          <a
            href="mailto:hello@manlozastore.com"
            className="primary-btn"
          >
            Email Us
            <span>→</span>
          </a>

        </div>
      </section>

    </div>
  );
}

export default Contact;