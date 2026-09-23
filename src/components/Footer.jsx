import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <footer className="site-footer">

      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo footer-logo">
              <span className="logo-mark">M</span>

              <span className="logo-text">
                manloza
                <small>store</small>
              </span>
            </Link>

            <p>
              Discover carefully selected products for your
              beauty, home, and everyday style.
            </p>

            <div className="footer-social">

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                f
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                &lt;/&gt;
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Customer Service */}
          <div className="footer-column">
            <h3>Customer Service</h3>

            <Link to="/cart">Shopping Cart</Link>
            <Link to="/login">My Account</Link>
            <Link to="/contact">Help Center</Link>
            <Link to="/contact">Shipping & Delivery</Link>
          </div>

          {/* Newsletter */}
          <div className="footer-column footer-newsletter">
            <h3>Stay Connected</h3>

            <p>
              Subscribe to receive our latest products,
              offers, and updates.
            </p>

            <form
              className="newsletter-form"
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Your email address"
                required
              />

              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">

          <p>
            © {currentYear} manloza store. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;