import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="section not-found">
      <div className="container">

        <div className="not-found-content">

          <span className="section-label">
            PAGE NOT FOUND
          </span>

          <div className="not-found-number">
            404
          </div>

          <h1>
            Looks like you're lost.
          </h1>

          <p>
            The page you're looking for doesn't exist,
            may have been moved, or is no longer available.
          </p>

          <div className="not-found-actions">

            <Link
              to="/"
              className="primary-btn"
            >
              Back to Home
              <span>→</span>
            </Link>

            <button
              type="button"
              className="secondary-btn"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NotFound;