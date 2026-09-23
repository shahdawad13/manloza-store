import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartCount } = useCart();
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleCartClick = () => {
    closeMenu();
    navigate("/cart");
  };

  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">M</span>

          <span className="logo-text">
            manloza
            <small>store</small>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`nav-menu ${menuOpen ? "nav-open" : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active" : ""}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        {/* Header Actions */}
        <div className="header-actions">

          {/* Login */}
          <Link
            to="/login"
            className="header-login"
            onClick={closeMenu}
          >
            Login
          </Link>

          {/* Cart */}
          <button
            type="button"
            className="header-icon cart-button"
            onClick={handleCartClick}
            aria-label="Open shopping cart"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 4H5L7.4 15.2C7.5 15.7 8 16 8.5 16H18.5C19 16 19.4 15.7 19.6 15.2L21 9H6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <circle
                cx="9"
                cy="20"
                r="1.4"
                fill="currentColor"
              />

              <circle
                cx="18"
                cy="20"
                r="1.4"
                fill="currentColor"
              />
            </svg>

            {cartCount > 0 && (
              <span className="cart-count">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`menu-toggle ${
              menuOpen ? "menu-active" : ""
            }`}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;