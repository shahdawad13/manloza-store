import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGitHubRepos } from "../services/githubApi";

function GitHubProjects({ username }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchGitHubRepos(username);

        if (isMounted) {
          setProjects(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err.message || "Unable to load GitHub projects."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (username) {
      loadProjects();
    } else {
      setLoading(false);
      setError("GitHub username is not available.");
    }

    return () => {
      isMounted = false;
    };
  }, [username]);

  if (loading) {
    return (
      <section className="github-section">
        <div className="container">
          <div className="github-header">
            <div>
              <span className="section-label">MY WORK</span>
              <h2 className="section-title">
                GitHub Projects
              </h2>
            </div>
          </div>

          <div className="github-loading">
            <div className="loading-spinner"></div>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="github-section">
        <div className="container">
          <div className="github-header">
            <div>
              <span className="section-label">MY WORK</span>
              <h2 className="section-title">
                GitHub Projects
              </h2>
            </div>
          </div>

          <div className="github-error">
            <span className="github-error-icon">!</span>

            <div>
              <h3>Projects couldn't be loaded</h3>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="github-section">
      <div className="container">

        {/* Section Header */}
        <div className="github-header">

          <div>
            <span className="section-label">
              MY WORK
            </span>

            <h2 className="section-title">
              GitHub Projects
            </h2>

            <p>
              Explore some of my latest projects and
              experiments from GitHub.
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            View GitHub Profile
            <span>↗</span>
          </a>

        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="github-error">
            <span className="github-error-icon">○</span>

            <div>
              <h3>No public projects found</h3>
              <p>
                Public repositories will appear here once
                they are available.
              </p>
            </div>
          </div>
        ) : (
          <div className="github-grid">

            {projects.map((project) => (
              <article
                className="github-card"
                key={project.id}
              >

                <div className="github-card-top">

                  <span className="github-folder">
                    &lt;/&gt;
                  </span>

                  <span className="github-visibility">
                    Public
                  </span>

                </div>

                <h3>
                  {project.name}
                </h3>

                <p>
                  {project.description ||
                    "A project from my GitHub portfolio."}
                </p>

                <div className="github-meta">

                  {project.language && (
                    <span>
                      <span className="language-dot"></span>
                      {project.language}
                    </span>
                  )}

                  <span>
                    ★ {project.stars}
                  </span>

                  <span>
                    Forks {project.forks}
                  </span>

                </div>

                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-card-link"
                >
                  View Repository
                  <span>↗</span>
                </a>

              </article>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}

export default GitHubProjects;