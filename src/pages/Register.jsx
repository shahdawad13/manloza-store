import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError(
        "Password must be at least 6 characters long."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Demo registration
    navigate("/login");
  };

  return (
    <div className="auth-page">

      <section className="auth-section">
        <div className="container">

          <div className="auth-card">

            {/* Logo */}
            <Link to="/" className="auth-logo">
              <span className="logo-mark">M</span>

              <span className="logo-text">
                manloza
                <small>store</small>
              </span>
            </Link>

            {/* Header */}
            <div className="auth-header">

              <span className="section-label">
                JOIN MANLOZA
              </span>

              <h1>
                Create your account
              </h1>

              <p>
                Create an account to make your
                shopping experience easier.
              </p>

            </div>

            {/* Form */}
            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div className="form-group">

                <label htmlFor="register-name">
                  Full Name
                </label>

                <input
                  id="register-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                />

              </div>

              {/* Email */}
              <div className="form-group">

                <label htmlFor="register-email">
                  Email Address
                </label>

                <input
                  id="register-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />

              </div>

              {/* Password */}
              <div className="form-group">

                <label htmlFor="register-password">
                  Password
                </label>

                <div className="password-input-wrapper">

                  <input
                    id="register-password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="At least 6 characters"
                    autoComplete="new-password"
                    minLength="6"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>

              {/* Confirm Password */}
              <div className="form-group">

                <label htmlFor="register-confirm-password">
                  Confirm Password
                </label>

                <div className="password-input-wrapper">

                  <input
                    id="register-confirm-password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    autoComplete="new-password"
                    minLength="6"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword
                      ? "Hide"
                      : "Show"}
                  </button>

                </div>

              </div>

              {/* Error */}
              {error && (
                <div className="form-error">
                  <span>!</span>
                  <p>{error}</p>
                </div>
              )}

              {/* Terms */}
              <label className="terms-label">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I agree to the Terms & Conditions
                  and Privacy Policy.
                </span>

              </label>

              {/* Submit */}
              <button
                type="submit"
                className="primary-btn auth-submit"
              >
                Create Account
                <span>→</span>
              </button>

            </form>

            {/* Login */}
            <div className="auth-footer">

              <p>
                Already have an account?
                {" "}
                <Link to="/login">
                  Sign In
                </Link>
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Register;