import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.email || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    // Demo login
    navigate("/");
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
                WELCOME BACK
              </span>

              <h1>
                Sign in to your account
              </h1>

              <p>
                Access your account and continue
                exploring Manloza Store.
              </p>

            </div>

            {/* Form */}
            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              {/* Email */}
              <div className="form-group">

                <label htmlFor="login-email">
                  Email Address
                </label>

                <input
                  id="login-email"
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

                <div className="password-label-row">

                  <label htmlFor="login-password">
                    Password
                  </label>

                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() =>
                      setError(
                        "Password recovery is not connected yet."
                      )
                    }
                  >
                    Forgot Password?
                  </button>

                </div>

                <div className="password-input-wrapper">

                  <input
                    id="login-password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
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

              {/* Error */}
              {error && (
                <div className="form-error">
                  <span>!</span>
                  <p>{error}</p>
                </div>
              )}

              {/* Remember */}
              <div className="remember-row">

                <label className="remember-label">

                  <input
                    type="checkbox"
                    name="remember"
                  />

                  <span>
                    Remember me
                  </span>

                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                className="primary-btn auth-submit"
              >
                Sign In
                <span>→</span>
              </button>

            </form>

            {/* Register */}
            <div className="auth-footer">

              <p>
                Don't have an account?
                {" "}
                <Link to="/register">
                  Create an account
                </Link>
              </p>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Login;